const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false })) // 处理url编码的数据
// app.use(express.json()) //处理json数据

app.get('/test', (req, res) => {
  console.log(req.query)
  // setTimeout(() => {
  res.send('响应ok')
  // }, 3000)
})

app.post('/test', (req, res) => {
  console.log(req.body)
  setTimeout(() => {
    res.send([
      { username: 'dbj', info: '红浪漫资深会员' },
      { username: 'hj', info: '资深lsp' },
    ])
  }, 2000)
})

//验证用户名是否存在
app.post('/verifyUsername', (req, res) => {
  // 获取用户上传的用户名
  const { name } = req.body
  console.log(req.body)
  // 验证用户名是否存在
  const arr = ['sa', 'pme', 'yyds', 'dbj', 'yxxbb']
  // 查找数组中,有没有指定值
  const result = arr.includes(name)
  // result的值为true,表示用户名已存在,否则就不存在
  setTimeout(() => {
    res.send(
      result
        ? { code: 101, msg: '用户名不可用' }
        : { code: 100, msg: '用户名可用' }
    )
  }, 2000)
})

app.listen(5000, () => {
  console.log('ok')
})
