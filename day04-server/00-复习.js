/*

    mongodb数据库软件如何启动?

        mongod.exe

    mongodb结构?

        多个数据库
        多个集合
        多个文档(数据)


    操作mongodb有哪些方式,分别是什么?

        命令行工具 mongo.exe 

        可视化工具 

            1. 先和数据库进行连接 先打开mongodb数据库软件
            2. 打开数据(如果没有则需要自己创建)
            3. 打开集合(如果没有则创建)
            4. 如果要执行增删改查可以执行指令

        通过代码操作数据库(mongoose)

            1. 下载 mongoose
            2. 引入 
            3. 建立连接
                mongoose.connect('mongodb://127.0.0.1:27017/数据库名') 返回一个promise, promise状态切换为成功则表示数据库连接成功
            4. 创建约束对象
                const Schema = mongoose.Schema
                const xxxSchema = new Schema({
                    字段: {
                        type: 控制当前字段的类型
                        required:控制当前字段是否必填
                        default:  当前字段的默认值
                        unique:  当前字段是否唯一
                    }
                   
                },{collection: '集合名'})

            5. 创建model对象
                const xxxModel = mongoose.model('集合名', schema对象)  
                
            6. 利用model对象,进行CRUD

                xxxModel.create(文档对象) 不关心返回值,如果不写第二个回调函数的参数,返回值就是一个promise对象

                xxxModel.find({查询条件}, {投影}) 关心返回值,返回一个promise,promise成功的值是数组
                  xxxModel.findOne({查询条件}, {投影}) 关心返回值,返回一个promise,promise成功的值是指定的数据对象,如果找不到返回null

                updateOne({查询条件},{修改内容})  不关心返回值,返回一个promise, 修改符合条件的第一条
                updateMany({查询条件},{修改内容})  不关心返回值,返回一个promise, 修改符合条件的所有

                updateOne({查询条件}, {$set: {age: 18}})

                删除
                deleteOne({查询条件}) 不关心返回值,返回一个promise,删除第一个
                deleteMany({查询条件}) 不关心返回值,返回一个promise,删除所有



                查找所有数据中,年龄是18岁,或20岁的所有的数据
                xxxModel.find({age: {$in:[18,20]}})

                查找一条数据, 性别不是男也不是女的数据
                xxxModel.findOne({$where:function(){
                    return this.sex !== '男' && this.sex !== '女'       
                }})



















*/
