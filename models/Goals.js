const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  having: [
    {
      title: {
        type: String,
        required: true
      },
      acheived: {
        type: Boolean,
        required: true
      },
      date: {
        type: Date,
        default: Date.now,
      }
    }
  ],
  being: [
    {
      title: {
        type: String,
        required: true
      },
      acheived: {
        type: Boolean,
        required: true
      },
      date: {
        type: Date,
        default: Date.now,
      }
    }
  ],
  doing: [
    {
      title: {
        type: String,
        required: true
      },
      acheived: {
        type: Boolean,
        required: true
      },
      date: {
        type: Date,
        default: Date.now,
      }
    }
  ],
})

module.exports = Goal = mongoose.model('goal', GoalSchema)