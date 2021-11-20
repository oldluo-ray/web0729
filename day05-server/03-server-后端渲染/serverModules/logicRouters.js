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
    result.test = '<script>console.log(123)</script>'
    // 利用查询字符串,拼接数据,是为了最终能够在浏览器端,拿到这个数据
    // res.redirect('http://127.0.0.1:5000/index.html?username=' + result.name)
    // 调用res.render会导致ejs模板引擎参与工作,ejs会将动态的渲染模板,然后将动态渲染完 的结果,直接响应给浏览器
    // res.render('模板名称', 要渲染的数据对象) 模板名称就是文件名
    res.render('index', result)
  } else {
    res.send('登录失败-账户名或密码错误')
  }
})

module.exports = router
