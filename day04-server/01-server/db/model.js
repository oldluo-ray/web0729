//只创建model对象
const mongoose = require('mongoose')
const rSchema = require('./schema')

// 创建model对象
module.exports = mongoose.model('users', rSchema)
