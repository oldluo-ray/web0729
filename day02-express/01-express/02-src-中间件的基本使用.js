// 1. 引入express
const express = require('express')

// 2. 创建服务器对象
const app = express()
// 设置中间件
// 中间件注意问题:
// 1. 中间件要写在路由的前面
// 2. app.use是使用中间件,里面的函数才是中间件
// 3. 请求发送过来之后,先执行中间件,所有中间件执行完毕,才会执行目标路由的回调函数
// 4. 中间件可以接收到req,res和next
// req是请求对象, 这个请求对象和后面的所有的中间件的请求对象以及目标路由的请求对象都是同一个
// res是响应对象, 这个响应对象和后面的所有的中间件的响应对象以及目标路由的响应对象都是同一个
//next 表示下一个中间件,如果调用了next.后面中间件才会执行,如果没有调用,后面的中间件就不会执行了
app.use(function (req, res, next) {
  console.log('中间件1执行了')
  // res.set('a', 123)
  req.xxx = '东北晶-lsp'
  next()
})

app.use(function (req, res, next) {
  console.log(req.xxx)
  console.log('中间件2执行了')
  next()
})

app.get('/hlm', (req, res) => {
  console.log(req.xxx)
  console.log('/hlm执行了')
  res.send('红浪漫欢迎您')
})
app.get('/bmhs', (req, res) => {
  console.log(req.xxx)
  console.log('/bmhs执行了')
  res.send('你来了,我的小宝贝')
})
app.get('/tsrj', (req, res) => {
  console.log(req.xxx)
  console.log('/tsrj执行了')
  res.send('土豪天堂')
})

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
