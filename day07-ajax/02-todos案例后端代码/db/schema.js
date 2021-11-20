const mongoose = require('mongoose')
const Schema = mongoose.Schema
// {}
module.exports = new Schema({
  todoName: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
})
