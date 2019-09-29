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
  goalTarget: {
    type: Number,
    required: true,
  },
  totalSaved: {
    type: Number,
  },
  currentBalance: {
    type: Number,
  },
  savingCommitment: {
    type: Number,
  },
  savingDurationMonths: {
    type: String,
  },
  savingDurationYears: {
    type: String,
  },
  savingFrequency: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
