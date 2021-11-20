//1. 引入express
const express = require('express')
// 2. 创建应用对象
const app = express()

// 处理静态资源
// 注意: 只要配置了这行代码,前端写的所有的文件,都可以直接访问获取
app.use(express.static('./assets'))
// 处理post请求上传的参数的中间件
app.use(express.urlencoded({ extended: false }))

// 配置处理登录操作的路由
app.post('/login', (req, res) => {
  // 1. 获取用户名和密码
  //   console.log(req.body)
  const { username, password } = req.body

  // 2. 验证用户名和密码是否正确
  // 假设: 用户名是 dbjlsp  密码666666
  if (username === 'dbjlsp' && password === '666666') {
    //登录成功
    //重定向让浏览器访问首页
    res.redirect('http://127.0.0.1:5000/html/index.html')
  } else {
    //登录失败
    res.send('账户名或密码错误')
  }
})

// 3. 启动服务器
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('服务器启动成功')
})
