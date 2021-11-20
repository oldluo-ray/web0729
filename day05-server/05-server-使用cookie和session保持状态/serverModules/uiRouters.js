const express = require('express')
// 创建路由器对象
const router = express.Router()
// 引入path模块,并且结构resolve方法.便于使用
const { resolve } = require('path')
// 配置路由,返回静态页面
router.get('/register', (req, res) => {
  // 将register.html响应给浏览器,让浏览器渲染
  res.sendFile(resolve('web', 'register.html'))
})
// 配置路由,返回静态页面
router.get('/login', (req, res) => {
  // 将login.html响应给浏览器,让浏览器渲染
  res.sendFile(resolve('web', 'login.html'))
})
// 配置路由,返回静态页面
router.get('/index', (req, res) => {
  // 访问首页是登录成功之后紧接着发过来的请求,这次可以获取到cookie的信息
  // console.log(req.cookies)
  // 如果登录成功了,服务器就会让浏览器存储一个username. 所有如果之前登录成功,则访问首页的时候回获取到username的值,如果没有则表示之前没有登录,或已经退出了
  console.log(req.session.username)
  if (req.session.username) {
    // 之前登录成功,直接访问首页
    res.sendFile(resolve('web', 'index.html'))
  } else {
    // 之前没有登录,或已经退出,则直接重定向到登录页面
    res.redirect('http://127.0.0.1:5000/login')
  }
})

module.exports = router
