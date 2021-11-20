// 1. 引入express
const express = require('express')
//引入第三方中间件
// const bodyParser = require('body-parser')
// 2. 创建服务器对象
const app = express()

// 使用第三方中间件
// bodyParser.urlencoded 这个函数调用,返回一个新的函数,新函数才是真正我们要使用的中间件
//bodyParser的作用: 就是自动帮我们将post请求上传的请求主体的数据,进行解析,解析之后,添加到req.body上面,那么我们在路由的回调中就可以获取到请求主体的数据了
// app.use(bodyParser.urlencoded({ extended: false }))

// 使用内置的中间件
app.use(express.urlencoded({ extended: false }))
app.get('/hlm', (req, res) => {
  console.log(req.xxx)
  console.log('/hlm执行了')
  res.send('红浪漫欢迎您')
})
app.post('/bmhs', (req, res) => {
  console.log(req.body.username)
  console.log('/bmhs执行了')
  res.send('你来了,我的小宝贝')
})

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
