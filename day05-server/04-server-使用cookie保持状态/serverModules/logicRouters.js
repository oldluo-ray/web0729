const express = require('express')
// 创建router对象, 相当于是一个app
const router = express.Router()
// 创建model对象
const rModel = require('../db/model')
// 接收注册请求的接口
router.post('/register', async (req, res) => {
  // 1. 获取用户上传的参数
  // username和password规定了前端上传给后台的数据的名字是什么
  // username和password同时也是接收到的数据
  const { username, password } = req.body

  // 2. 将数据插入到数据库中
  try {
    // 注意: 如果name的值是undefined.在数据库认为,就是没写
    await rModel.create({ name: username, password })
    res.redirect('http://127.0.0.1:5000/login')
  } catch (err) {
    console.log(err)
    res.send('注册失败')
  }
})

// 登录接口
router.post('/login', async (req, res) => {
  // 获取用户名和密码
  const { username, password } = req.body

  // 去数据库中查找指定的数据
  const result = await rModel.findOne({ name: username, password })

  // 判断,如果查找到了数据,说明登录成功,如果没有说明登录失败
  if (result) {
    // 利用查询字符串,拼接数据,是为了最终能够在浏览器端,拿到这个数据
    // 让浏览器将用户名存储到cookie中
    // 注意: res.cookie其实就是设置响应头: set-cookie: 键=值
    res.cookie('username', result.name, { maxAge: 1000 * 60 * 60 })
    res.redirect('http://127.0.0.1:5000/index')
  } else {
    res.send('登录失败-账户名或密码错误')
  }
})

module.exports = router
