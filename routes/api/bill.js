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

      const bill = await newBill.save();

      res.json(bill);
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

module.exports = router;
