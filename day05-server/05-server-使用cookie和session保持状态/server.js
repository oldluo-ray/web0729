/*

静态页面 内容数据写死的页面
动态页面 内容不是写死的,不同的人或不同的时间打开,展示的内容不同. 


工作中,主要是为了写动态页面. 要实现动态页面有两种方式: 
  前端渲染(目前流行的方法)(动态渲染数据的行为在浏览器中执行)
  后端渲染(是传统的方式)(动态渲染数据的行为在浏服务器中执行)


http协议是无状态的, 所以导致首页,即便是没有登录的状态下也可以访问. 要解决这个问题,可以使用cookie配合. 
cookie的特点: cookie是浏览器端存储数据的一种方式, 如果请求某个服务器的时候,服务器让浏览器往cookie中存储数据了,那么往后只要是给这个服务器发请求,浏览器就会自动将cookie的信息,添加到请求头中,上传给服务器



*/

;(async function () {
  // 如果一个模块,没有导出任何内容,只是要执行一下这个模块的代码.就可以引入,但不接收
  const uiRouter = require('./serverModules/uiRouters')
  const logicRouter = require('./serverModules/logicRouters')
  const express = require('express')
  // 将上传上来的cookies,添加给req.cookies的中间件
  const cookieParser = require('cookie-parser')
  //服务器端开启session的工具
  const session = require('express-session')
  // 现在流行将原生存储在服务器的session信息,存储到服务器所对应的数据库
  const MongoStore = require('connect-mongo')(session)

  // 连接数据库
  const connectPromise = require('./db/db')
  await connectPromise
  console.log('数据库连接成功')

  const app = express()
  // 使用中间件,让post请求的数据,可以通过req.body获取
  app.use(express.urlencoded({ extended: false }))
  // 使用中间件,让浏览器可以直接访问静态资源
  app.use(express.static('./web'))
  app.use(cookieParser())
  app.use(
    session({
      name: 'sessionid', //设置cookie的name，默认值是：connect.sid
      secret: 'atguigu', //参与加密的字符串（又称签名）
      saveUninitialized: false, //是否在存储内容之前创建会话
      resave: true, //是否在每次请求时，强制重新保存session，即使他们没有变化
      store: new MongoStore({
        url: 'mongodb://localhost:27017/sessions_container',
        touchAfter: 24 * 3600, //修改频率（例：//在24小时之内只更新一次）
      }),
      cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作cookie
        maxAge: 1000 * 30, // 设置cookie的过期时间
      },
    })
  )

  // 使用路由器中间件
  // 注意: 虽然这里是使用中间件,但是路由器中间件的作用是配置路由,所以一定要把这两行代码,写在处理静态资源和处理post请求的中间件后面
  app.use(logicRouter)
  app.use(uiRouter)

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
