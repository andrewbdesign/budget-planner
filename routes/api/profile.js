const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const Expense = require('../../models/Expense');
const Goal = require('../../models/Goal');
const Bill = require('../../models/Bill');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile details
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name'],
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   Post api/profile
// @desc    Create or Update profile
// @access  Private

router.post(
  '/',
  [
    auth,
    [
      check('monthlyIncome', 'Your monthly income is required')
        .not()
        .isEmpty(),
      check('payDay', 'Your payday is required')
        .not()
        .isEmpty(),
      check('currentBankBalance', 'Current bank balanceis required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { monthlyIncome, payDay, currentBankBalance } = req.body;

    const profileFields = {};

    profileFields.monthlyIncome = monthlyIncome;
    profileFields.payDay = payDay;
    profileFields.currentBankBalance = currentBankBalance;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true },
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.send(500).json('Server error');
    }
  },
);

// @route   Delete api/profile
// @desc    Delete profile and expenses, goals, dreams, bills
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user Expenses
    await Expense.deleteMany({ user: req.user.id });
    // Remove user Goals
    await Goal.deleteMany({ user: req.user.id });
    // Remove user Dreams
    await Dream.deleteMany({ user: req.user.id });
    // Remove user Bills
    await Bill.deleteMany({ user: req.user.id });
    // Remove user Profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user User
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
