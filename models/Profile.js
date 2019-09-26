const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  goalTitle: {
    type: String,
    required: true,
  },
  targetGoal: {
    type: Number,
    required: true,
  },
  totalSaved: {
    type: Number,
  },
  currentBalance: {
    type: Number,
  },
  timeline: {
    months: {
      type: Number,
      required: true,
    },
    years: {
      type: Number,
      required: true,
    },
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
