// 只连接数据库
// 注意: 在模块化中,如果一个模块被引入多次,其实也执行一次
const mongoose = require('mongoose')
// 由于服务器中几乎所有逻辑都是要去操作数据库,所以在开启服务器之前,要先利用mongoose连接数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0729_register')
