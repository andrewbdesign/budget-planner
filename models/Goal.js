const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  goalTitle: {
    type: String,
    required: true,
  },
  goalTarget: {
    type: Number,
    required: true,
  },
  totalSaved: {
    type: Number,
    required: true,
  },
  achieved: {
    type: Boolean,
    required: true,
  },
  savingFrequency: {
    type: String,
  },
  savingCommitment: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Goal = mongoose.model('Goal', GoalSchema);
