;(async function () {
  // 1. 引入mongoose
  const mongoose = require('mongoose')
  // 2. 连接mongodb数据库软件
  // 如果没有这个数据库,mongoose会自动创建
  const isSuccessPromise = mongoose.connect(
    'mongodb://127.0.0.1:27017/web0729_mongoose'
  )

  // await 后面如果是一个promise对象,代码会暂时停止执行,当promise的状态改成成功之后,await promise对象后面的代码才会被调用
  await isSuccessPromise

  console.log('数据库连接成功')

  // 创建scheme约束对象
  // 获取Schema构造函数
  const Schema = mongoose.Schema
  // 创建Schema对象
  // 注意: 创建schema对象的第二个参数,可以解决mongoose自动给集合名加s的问题
  const saSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      sex: {
        type: String,
        default: 'female',
      },
      info: {
        type: Schema.Types.Mixed, // 表示mongodb所支持的所有数据类型
        default: 'sa',
      },
    },
    { collection: 'user' }
  )

  // 创建model对象(创建集合)
  // 注意: mongoose自动帮我们创建的集合会默认加s.
  const saModel = mongoose.model('user', saSchema)

  // 往集合中插入,修改,删除和查询文档(数据)

  //添加
  // 注意: 由于添加行为不关心返回值,所以不需要接收promise成功的结果
  //   await saModel.create({ name: 'sa2', age: 30 })

  // 查找
  //   const result = await saModel.find({ age: { $gt: 16 } },{name: 1,_id: 0})
  // find方法会找到符合条件的所有数据,即便没有找到数据,也返回一个数组
  //   const result = await saModel.find({ name: 'sa2' })
  //   const result = await saModel.findOne({ name: 'sa2' })
  //   console.log(result)
  // 强烈注意:
  // find返回的是数组,不管有没有数据,都是数组
  // findOne返回的就是指定的那个对象,如果没有返回null

  //修改

  //   await saModel.updateOne({ age: { $gt: 16 } }, { $set: { info: '我很好' } })
  //   await saModel.updateMany(
  //     { age: { $gt: 16 } },
  //     { $set: { info: '我很好aaaaa' } }
  //   )

  // 删除
  //   await saModel.deleteOne({ age: { $gt: 16 } })
  //   await saModel.deleteMany({ age: { $gt: 16 } })
})()
