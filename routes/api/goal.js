const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Goal = require('../../models/Goal');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route    POST api/goal
// @desc     Create a goal
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('goalTitle', 'Goal title is required')
        .not()
        .isEmpty(),
      check('goalTarget', 'Goal target is required')
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

      const newGoal = new Goal({
        goalTitle: req.body.goalTitle,
        goalTarget: req.body.goalTarget,
        totalSaved: req.body.totalSaved,
        achieved: req.body.achieved,
        savingFrequency: req.body.savingFrequency,
        savingCommitment: req.body.savingCommitment,
        date: req.body.date,
        name: user.name,
        user: req.user.id,
      });

      await newGoal.save();

      const goals = await Goal.find().sort({ date: -1 });
      // Filter by user
      const result = goals.filter(goal => goal.user.toString() === req.user.id);
      res.json(result);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     GET /api/goal
// @desc      Get all profile users goals
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const goals = await Goal.find().sort({ date: -1 });
    // Filter by user
    const result = goals.filter(goal => goal.user.toString() === req.user.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route     GET /api/goal/:id
// @desc      Get goals by id
// @access    Private
router.get('/:id', auth, async (req, res) => {
  try {
    const goal = await Goal.findById({ _id: req.params.id });
    if (!goal) {
      return res.status(404).json({ msg: 'Goal not found' });
    }
    // Check user
    if (goal.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    res.json(goal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    Update api/goal/:id
// @desc     Update a goal
// @access   Private

router.put('/:id', auth, async (req, res) => {
  try {
    const {
      goalTitle,
      goalTarget,
      totalSaved,
      achieved,
      savingFrequency,
      savingCommitment,
    } = req.body;

    const goalFields = {};
    if (goalTitle) goalFields.goalTitle = goalTitle;
    if (goalTarget >= 0) goalFields.goalTarget = goalTarget;
    if (totalSaved >= 0) goalFields.totalSaved = totalSaved;
    if (savingCommitment >= 0) goalFields.savingCommitment = savingCommitment;
    if (savingFrequency) goalFields.savingFrequency = savingFrequency;
    if (achieved !== null) goalFields.achieved = achieved;

    await Goal.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: goalFields },
      { new: true, upsert: true },
    );

    const goals = await Goal.find().sort({ date: -1 });
    // Filter by user
    const result = goals.filter(goal => goal.user.toString() === req.user.id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Goal not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/dream/:id
// @desc     Delete a dream
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      return res.status(404).json({ msg: 'Goal not found' });
    }

    // Check user
    if (goal.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await goal.remove();
    const goals = await Goal.find().sort({ date: -1 });
    // Filter by user
    const result = goals.filter(goal => goal.user.toString() === req.user.id);
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
