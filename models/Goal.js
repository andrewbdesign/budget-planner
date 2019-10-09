const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  achieved: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Goal = mongoose.model('Goal', GoalSchema);
