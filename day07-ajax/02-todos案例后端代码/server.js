;(async function () {
  const express = require('express')
  const cors = require('cors')
  const todoModel = require('./db/model')
  const app = express()

  // 引入连接数据库的代码
  await require('./db/db')
  console.log('数据库连接成功')

  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  // 定义一个添加任务的接口
  app.post('/addTodo', async (req, res) => {
    const { todoName } = req.body
    // 根据任务名,创建一个文档对象
    const obj = {
      todoName,
    }

    // 插入到数据库中
    await todoModel.create(obj)

    // 查询插入之后的所有的数据,响应给浏览器
    const todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    res.send(todos)
  })

  // 定义一个响应所有任务信息的接口(为了练习,使用jsonp)
  app.get('/getTodos', async (req, res) => {
    // 接收函数名
    const { callback } = req.query

    // 查询插入之后的所有的数据,响应给浏览器
    let todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    // 注意: 本来send可以将一个js对象自动转成json字符串,但是由于我们要拼接函数调用.所以传给send方法的就是一个字符串. 字符串拼接的时候,将数组toString.导致[]丢失. 这样的数据不便于前端操作.所以需要先在服务器中,将数组,转成json字符串然后再进行拼接
    todos = JSON.stringify(todos)
    res.send(`${callback}(${todos})`) // 函数名(数据)
  })

  // 定义一个修改某一个任务状态的接口
  app.post('/updateTodo', async (req, res) => {
    const { id, checked } = req.body

    // 根据id查找数据,并且修改
    await todoModel.updateOne({ _id: id }, { $set: { isDone: checked } })
    // 查询插入之后的所有的数据,响应给浏览器
    const todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    res.send(todos)
  })
  // 定义一个删除某一个任务的接口
  app.post('/deleteTodo', async (req, res) => {
    const { id } = req.body

    // 根据id查找数据,并且修改
    await todoModel.deleteOne({ _id: id })
    // 查询插入之后的所有的数据,响应给浏览器
    const todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    res.send(todos)
  })

  // 修改所有任务状态的接口
  app.post('/updataAllTodos', async (req, res) => {
    const { checked } = req.body

    // 根据id查找数据,并且修改
    await todoModel.updateMany({}, { $set: { isDone: checked } })
    // 查询插入之后的所有的数据,响应给浏览器
    const todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    res.send(todos)
  })

  // 删除所有已完成的数据
  app.post('/deleteAllDoneTodos', async (req, res) => {
    // 根据id查找数据,并且修改
    await todoModel.deleteMany({ isDone: true })
    // 查询插入之后的所有的数据,响应给浏览器
    const todos = await todoModel.find()
    // send会自动将数组,转成json字符串
    res.send(todos)
  })

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
