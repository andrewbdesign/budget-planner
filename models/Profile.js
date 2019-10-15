const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  monthlyIncome: {
    type: Number,
    required: true,
  },
  payDay: {
    type: String,
    required: true,
  },
  currentBankBalance: {
    type: Number,
    required: true,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
