// 1. 引入express
const express = require('express')
// 2. 创建服务器对象
const app = express()

app.get('/hlm', (req, res) => {
  // res.send用来响应客户端, 响应数据
  // res.send([
  //   { name: 'hj', age: 68, info: 'lsp' },
  //   { name: 'dbj', age: 18, info: 'lsp' },
  //   { name: 'jj', age: 50, info: 'lsp' },
  // ])
  // 下载文件
  // res.download('文件的路径')
  // res.download('./assets/test.html')

  //  让浏览器直接打开文件,并且必须使用绝对路径
  // 注意:在node上执行的所有的js文件,都可以直接获取__dirname
  // console.log(__dirname) //返回当前文件所处的文件夹的绝对路径
  res.sendFile(__dirname + '/assets/test.html')
})

// app.post('/hlm', (req, res) => {
//   // 注意: post请求的请求主体,目前默认无法获取到数据.需要使用后面学习的中间件
//   //   console.log('post接收了', req.body)
// })

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
