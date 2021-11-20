// 1. 引入express
const express = require('express')
// 2. 创建服务器对象
const app = express()

// app.get/post/all
// 协议://域名:端口号/路径?查询字符串#哈希值
app.get('/hlm', (req, res) => {
  // 注意: 当浏览器接收到了这个指定的请求,对应的这个函数,才会被执行
  //   req是一个对象,包含了请求报文中的所有信息
  //   res是一个对象,可以用来响应浏览器
  //   console.log()
  //   console.log('欢迎来到红浪漫', req, res)
  res.send('今天红浪漫打5折')
})

app.get('/llm', (req, res) => {
  res.send('今天绿浪漫打1折')
})

// 3. 启动服务器
app.listen(5000, (err) => {
  // 如果if和else中只有一行代码, {} 就可以忽略不写
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
