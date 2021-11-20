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

module.exports = router
