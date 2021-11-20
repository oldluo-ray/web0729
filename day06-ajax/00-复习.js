/*


路由器中间件
    作用: 将配置的后端路由,抽取到单独的js文件中
    使用: 
        1. 创建路由对象
        const router = express.Router()
        2. 配置路由
        router.get/post 
        3. 导出路由对象
        module.exports = router
        4. 使用路由器中间件
        app.use(router)

cookie

    是浏览器存储数据的方式
    
    特点: 
        cookie中存储的数据,在后续的请求服务器过程中,会自动添加到请求头中,上传给服务器

    执行的过程： 

        1. 服务器设置响应头,set-cookie让浏览器将指定数据,存储到浏览器的cookies中
        2. 浏览器再次给服务器发送请求,会自动将cookies中的数据,添加到请求头中: cookie 
        上传给服务器

    cookie的有效期: 

        1. 默认有效期: 一个会话的时间 
        2. 自定义有效期: 使用maxAge设置


    在js中获取cookie: 

        document.cookie


session

     配合cookie的流程: 

     1. 点击登录,服务器验证, 开启session, 会开启一块空间,这个空间有一个唯一标识sessionid,将用户信息存储在开启的空间中
     2. 设置响应头,让浏览器将sessionid存储到cookie中
     3. 下一次请求,浏览器会将cookie中的sessionid自动上传给服务器,服务器拿到sessionid,去查找这个sessionid所对应的空间,如果有空间,再去查找是否有指定的数据,如果有数据,就证明登录成功,如果没有数据,或没有指定空间就认为没有登录或已经退出


*/
