const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Bill = require('../../models/Bill');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route    POST api/bill
// @desc     Create a bill
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

      const newBill = new Bill({
        title: req.body.title,
        amount: req.body.amount,
        paid: req.body.paid,
        date: req.body.date,
        name: user.name,
        user: req.user.id,
      });

      await newBill.save();

      const bills = await Bill.find().sort({ date: -1 });
      res.json(bills);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     GET /api/bills
// @desc      Get all profile users bills
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const bills = await Bill.find().sort({ date: -1 });
    res.json(bills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    DELETE api/bills/:id
// @desc     Delete a bill
// @access   Private

router.put('/:id', auth, async (req, res) => {
  try {
    // Update the stuff here

    // console.log('req.body', req.body);
    // const bill = await Bill.findById(req.params.id);
    // res.json(bill);

    const { title, amount, paid } = req.body;

    const billFields = {};
    if (title) billFields.title = title;
    if (amount) billFields.amount = amount;
    if (paid) billFields.paid = paid;

    await Bill.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: billFields },
      { new: true, upsert: true },
    );

    const bills = await Bill.find().sort({ date: -1 });
    res.json(bills);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Bill not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/bills/:id
// @desc     Delete a bill
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);

    if (!bill) {
      return res.status(404).json({ msg: 'Bill not found' });
    }

    // Check user
    if (bill.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await bill.remove();
    const bills = await Bill.find().sort({ date: -1 });
    res.json(bills);
    // res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Bill not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
