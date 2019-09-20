const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

module.exports = Expense = mongoose.model('expense', ExpenseSchema)