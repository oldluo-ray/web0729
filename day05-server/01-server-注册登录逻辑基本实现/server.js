;(async function () {
  // 如果一个模块,没有导出任何内容,只是要执行一下这个模块的代码.就可以引入,但不接收
  const uiRouter = require('./serverModules/uiRouters')
  const logicRouter = require('./serverModules/logicRouters')
  const express = require('express')
  // 连接数据库
  const connectPromise = require('./db/db')
  await connectPromise
  console.log('数据库连接成功')

  const app = express()
  // 使用中间件,让post请求的数据,可以通过req.body获取
  app.use(express.urlencoded({ extended: false }))
  // 使用中间件,让浏览器可以直接访问静态资源
  app.use(express.static('./web'))

  // 使用路由器中间件
  // 注意: 虽然这里是使用中间件,但是路由器中间件的作用是配置路由,所以一定要把这两行代码,写在处理静态资源和处理post请求的中间件后面
  app.use(logicRouter)
  app.use(uiRouter)

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
