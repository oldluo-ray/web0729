// 1. 引入express
const express = require('express')
const path = require('path')
// 2. 创建服务器对象
const app = express()

// 请求url: http://127.0.0.1:5000/test.html
// app.get('/test.html', (req, res) => {
//   res.sendFile(path.resolve('assets', 'test.html'))
// })

// // 请求url: //127.0.0.1:5000/1.jpg
// app.get('/1.jpg', (req, res) => {
//   res.sendFile(path.resolve('assets', '1.jpg'))
// })

// 直接使用内置中间件,用来处理所有的静态资源
app.use(express.static('./assets'))
// app.use(express.urlencoded({ extended: false }))
// app.get('/test', (req, res) => {
//   res.send('get-ok')
// })
// app.post('/test', (req, res) => {
//   console.log(req.body)
//   res.send('post-ok')
// })

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
