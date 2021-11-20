;(async function () {
  const express = require('express')
  // 连接数据库
  const connectPromise = require('./db/db')
  // 创建model对象
  const rModel = require('./db/model')
  await connectPromise
  console.log('数据库连接成功')
  const app = express()

  // 使用中间件,让post请求的数据,可以通过req.body获取
  app.use(express.urlencoded({ extended: false }))
  // 使用中间件,让浏览器可以直接访问静态资源
  app.use(express.static('./web'))

  // 接收注册请求的接口
  app.post('/register', async (req, res) => {
    // 1. 获取用户上传的参数
    // username和password规定了前端上传给后台的数据的名字是什么
    // username和password同时也是接收到的数据
    const { username, password } = req.body

    // 2. 将数据插入到数据库中
    try {
      // 注意: 如果name的值是undefined.在数据库认为,就是没写
      await rModel.create({ name: username, password })
      res.send('注册成功')
    } catch (err) {
      console.log(err)
      res.send('注册失败')
    }
  })

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
