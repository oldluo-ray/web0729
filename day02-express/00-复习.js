/*

    1. jquery是本地包还是全局包, 如何下载

        本地包

        npm i jquery@2.xx.xx


    2. 文件夹的名字叫express, 然后执行了npm init -y. 未来会存在什么问题?

         下载express包的时候会报错

         在package.json中修改name的值

    3. 什么是路由,什么是后端路由,后端路由由哪些部分组成

            路由是一一对应规则
            url地址和网络资源的一一对应规则

            请求方式
            路径
            回调函数

    4. 如何在node 平台上执行一个js文件

            先确定路径是否正确
            然后 node 文件夹.js 按下回车键
            


    5. nodemon的作用是什么
            重启服务器

            1. 执行js文件
            2. 监听文件变化
            3. 文件变化重新执行文件


    6. express如何开启服务

        1. 引入express
        const express = require('express')
        2. 创建应用对象
        const app = express()
        3. 开启服务
        app.listen(端口号,回调函数)

        配置一个路由,路径是/test, 然后响应一个字符串ok.请求方式是get 
        app.get('/test',(req,res)=>{
            res.send('ok')
        })


    7. 请求对象的api

        req.query  获取查询字符串
        req.params 获取路由参数
            如何定义路由参数 
                app.get('/test/:参数?',(req,res)=>{
                    res.send('ok')
                })
            如何传递路由参数
                发送请求的时候,直接拼接在/test路径后面
        req.get()   获取请求头信息
        req.body    获取请求主体


    8. 响应对象的api

         res.send() 响应具体的数据 可以是字符串或数组或对象
         res.download(文件的路径) 让浏览器下载文件
         res.sendFile() 让浏览器打开文件, 要求传入文件的绝对路径

         __dirname 返回当前文件所处的文件夹的绝对路径










*/
