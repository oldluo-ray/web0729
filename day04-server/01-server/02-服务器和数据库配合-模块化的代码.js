;(async function () {
  const express = require('express')
  // 连接数据库
  const connectPromise = require('./db/db')
  // 创建model对象
  const rModel = require('./db/model')
  await connectPromise
  console.log('数据库连接成功')
  const app = express()

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
