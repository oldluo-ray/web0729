// 1. 引入express
const express = require('express')
// 2. 创建服务器对象
const app = express()

// 路由: 定义了一套一一对应的规则
// 后端路由 : url地址和网络上资源的一一对应关系
// 后端路由的组成:
// 1. 请求方式
// 2. 路径
// 3. 回调函数

// 使用nodemon可以自动重启服务器
// 1. npm i nodemon -g
// 2. 在cmd的命令行窗口中, 执行nodemon 文件名.js

// 总结:
// req.query 用来获取get请求的查询字符串 拿到的是一个对象.里面就是查询字符串的键值对
// req.params 在express中,只能用于get请求. 用于获取路由参数
// 路由参数的使用:
//  1. 定义路由参数:  app.get('/路径/:参数名/:参数名')
//       注意: 在定义路由参数的时候,如果路由参数名后面没有?, 则表示路由参数必须传递.否则路由的回调函数不会触发. 如果加上?.则表示,参数可以不传
//  2. 传递路由参数: 发送请求的时候,把路由参数拼接在路径后面
//  3. 获取路由参数: req.params

// req.get('请求头中的键') 用于获取请求头中的信息

// req.body 用于获取post请求主体中的信息.但是默认拿不到.需要配合后面的中间件

app.get('/hlm/:msg?', (req, res) => {
  //   console.log('请求对象的查询字符串', req.query.name)
  //   console.log('请求对象的请求头的信息', req.get('host'))
  //   console.log('请求对象的请求头的信息', req.get('user-agent'))
  //   res.send('今天红浪漫打5折')
  console.log('get接收了路由参数', req.query)
})

app.post('/hlm', (req, res) => {
  // 注意: post请求的请求主体,目前默认无法获取到数据.需要使用后面学习的中间件
  //   console.log('post接收了', req.body)
})

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log(err)
  else console.log('服务器启动成功')
})
