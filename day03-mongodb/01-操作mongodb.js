/*

1. 启动mongodb
        执行mongod.exe 

2. 启动操作mongodb的命令行工具
        执行mongo.exe

3. 使用可视化工具操作mongodb
    3.1 创建连接. 注意:要在mongodb启动的情况下连接
    3.2 创建数据库
    3.3 创建集合
    3.4 使用集合进行增删改查

增删改查的指令: 
    // 添加的操作
    // db.stus.insert({"name":"pmy", "age": 38, "sex": "female", "info":"女流氓"})
    // db.stus.insertOne({"name":"yyds", "age": 78, "sex": "unknow", "info":"发型很帅"})
    // db.stus.insertMany([{"name":"sa", "age": 35, "sex": "double", "info":"我不好吗"},{"name":"hj", "age": 36, "sex": "male", "info":"lsp"}])
    // db.stus.insert({"name":"xjj", "age": 18, "sex": "female", "info":"老流氓2号"})
    // db.stus.find()

    // 查找的操作
    // db.stus.find({age: 38, name:'pmy'}) // 根据指定条件查询:查找年龄为38,并且名字是pmy的所有的数据
    // db.stus.find({age:{$gt: 70}})  // 查找年龄大于70,的所有的数据
    // db.stus.find({age: {$in: [18, 38]}}) // 查找年龄是18或38的所有的数据
    // db.stus.find({$or: [{name: 'pme'}, {age:35}]}) //查找名字是pme或年龄是35的所有的数据
    // db.stus.find({sex: {$ne: 'male'}}) // 找到性别不是male的所有的数据

    //  db.stus.find({name: /^s/})  // 查找名字是以s开头的所有的数据

    // db.stus.find({$where:function(){  // 查找性别不是male和female的所有的数据
        
    //     return this.sex !== 'male' && this.sex !== 'female'
    // }})

    // 查找时,添加投影,获取当前数据的部分信息
    // 查询条件决定了能够找到多少条数据, 投影决定了能够展示一条数据中多少个字段
    // db.集合.find({查询条件},{投影})
    // 投影: {属性: 1, 属性: 0} 1表示展示, 0 表示不展示
    // db.stus.find({name: 'yyds'}, {name:1, sex:1, _id: 0})

    // 关于数据类型的问题
    // db.stus.find()
    // db.stus.insert({age: '19'}) //添加时是字符串
    // db.stus.find({age: '19'}) // 查找时也必须是字符串

    // 查找一条
    // db.stus.find({age:{$gt:35}})
    // db.stus.findOne({age:{$gt:35}})
    // db.stus.find()

    // 修改
    // db.stus.update({age: 38},{$set: {name: 'pmw'}},{multi: true})
    // db.stus.updateOne({age: 38},{$set: {name: 'pmy'}})
    // db.stus.updateMany({age: 38},{$set: {name: 'pml'}})


    // 删除
    db.stus.remove({name: 'pml'})
    db.stus.find()

















*/
