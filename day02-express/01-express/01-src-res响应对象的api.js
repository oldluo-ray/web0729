// 1. 引入express
const express = require('express')
// node中有一个path模块是内置模块. path提供了方法,可以帮助我们拼接路径
const path = require('path')
// 2. 创建服务器对象
const app = express()

app.get('/hlm', (req, res) => {
  // console.log(req.params)
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
  // res.sendFile(__dirname + '/assets/test.html')

  // path.resolve专门用来拼接路径
  // /a/b/c
  // console.log()
  // res.sendFile(path.resolve('../assets', 'test.html'))
  // res.sendFile(path.resolve('assets', '1.jpg'))
  // res.sendFile(path.resolve('assets', '1.mp4'))
  // res.sendFile(path.resolve('assets', 'test')) // 由于文件浏览器无法渲染所以直接下载\
  // 重定向: 当浏览器发送请求过来之后,服务器响应浏览器,并告诉浏览器应该给指定的url重新发送请求. 浏览器接收到这个响应之后,会自动按照指定的url发送请求
  // res.redirect 在响应头中添加了location:http://www.atguigu.com这个信息.浏览器看到之后,自动发送请求
  // res.redirect('http://www.atguigu.com')
  // 设置响应头
  res.set('a', 123) //注意: 只是设置了响应头,并没有响应
  // console.log(res.get('a'))
  // res.status(200)
  res.send('ok')
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
