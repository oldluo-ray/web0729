const mongoose = require('mongoose')
const todoSchema = require('./schema')

module.exports = mongoose.model('todos', todoSchema)
