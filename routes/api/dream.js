const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Dream = require('../../models/Dream');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route    POST api/dream
// @desc     Create a dream
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Text is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newDream = new Dream({
        title: req.body.title,
        achieved: req.body.achieved,
        date: req.body.date,
        name: user.name,
        user: req.user.id,
      });

      await newDream.save();

      const dreams = await Dream.find().sort({ date: 1 });
      // Filter by user
      const result = dreams.filter(
        dream => dream.user.toString() === req.user.id,
      );
      res.json(result);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     GET /api/dream
// @desc      Get all profile users dreams
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const dreams = await Dream.find().sort({ date: 1 });
    // Filter by user
    const result = dreams.filter(
      dream => dream.user.toString() === req.user.id,
    );
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    Update api/dream/:id
// @desc     Update a dream
// @access   Private

router.put('/:id', auth, async (req, res) => {
  try {
    const { title, achieved } = req.body;

    const dreamFields = {};
    if (title) dreamFields.title = title;
    if (achieved !== null) dreamFields.achieved = achieved;

    await Dream.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: dreamFields },
      { new: true, upsert: true },
    );

    const dreams = await Dream.find().sort({ date: 1 });
    // Filter by user
    const result = dreams.filter(
      dream => dream.user.toString() === req.user.id,
    );
    res.json(result);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Dream not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/bills/:id
// @desc     Delete a bill
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.id);

    if (!dream) {
      return res.status(404).json({ msg: 'Dream not found' });
    }

    // Check user
    if (dream.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await dream.remove();
    const dreams = await Dream.find().sort({ date: 1 });
    // Filter by user
    const result = dreams.filter(
      dream => dream.user.toString() === req.user.id,
    );
    res.json(result);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Dream not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
