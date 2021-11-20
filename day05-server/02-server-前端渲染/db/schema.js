// 只定义约束对象
const mongoose = require('mongoose')
// 创建Schema对象

module.exports = new mongoose.Schema({
  // name和password规定了插入到数据库中的字段的名字
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  r_date: {
    type: Date,
    default: Date.now(),
  },
  enable: {
    type: Boolean,
    default: true,
  },
})
