;(async function () {
  const express = require('express')
  const mongoose = require('mongoose')
  const app = express()

  // 由于服务器中几乎所有逻辑都是要去操作数据库,所以在开启服务器之前,要先利用mongoose连接数据库
  await mongoose.connect('mongodb://127.0.0.1:27017/web0729_register')
  console.log('数据库连接成功')

  // 创建Schema对象
  const rSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
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

  // 创建model对象
  const rModel = mongoose.model('users', rSchema)

  

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
