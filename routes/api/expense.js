const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Expense = require('../../models/Expense');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route    POST api/expense
// @desc     Create a expense
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

      const newExpense = new Expense({
        title: req.body.title,
        amount: req.body.amount,
        // paid: req.body.paid,
        date: req.body.date,
        name: user.name,
        user: req.user.id,
      });

      await newExpense.save();

      const expenses = await Expense.find().sort({ date: -1 });
      res.json(expenses);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     GET /api/expense
// @desc      Get all profile users Expenses
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    DELETE api/expense/:id
// @desc     Delete a Expense
// @access   Private

router.put('/:id', auth, async (req, res) => {
  try {
    const { title, amount, paid } = req.body;

    const expenseFields = {};
    if (title) expenseFields.title = title;
    if (amount) expenseFields.amount = amount;
    // if (paid !== null) expenseFields.paid = paid;

    await Expense.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: expenseFields },
      { new: true, upsert: true },
    );

    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Expense not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/expense/:id
// @desc     Delete a expense
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ msg: 'Expense not found' });
    }

    // Check user
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await expense.remove();
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
    // res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Expense not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
