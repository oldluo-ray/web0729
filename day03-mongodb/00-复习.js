/*

    1. 请求对象

        查询字符串
        传 http://127.0.0.1:5000/test?xxx=1&yyy=2
        接收 req.query

        路由参数
        后台路由已经写好了,要求传入路由参数
        传: http://127.0.0.1:5000/test/1/2
        后台配置的路由: app.get('/test/:page/:pageSize',()=>{})
        接收: req.params

        请求对象.get('键') 获取请求头信息

        请求对象.body 获取post请求的请求主体的信息 默认拿不到
        app.use(express.urlencoded({extended: false})) 添加这个中间件,就可以通过req.body获取请求主体信息


    2. 响应对象

        res.send() 响应具体数据 字符串,数组,对象
        res.sendFile(文件的绝对路径) 响应一个文件给浏览器,浏览器会直接渲染
        我们会使用path模块帮我们拼接路径,是node提供的一个内置模块 
        path.resolve('路径1','路径2') 会自动加斜杠,并且自定拼接__dirname
        __dirname 返回当前文件所处的文件夹的绝对路径
        
        res.redirect('完整的url地址') 重定向

    3. 中间件

        app.use() 使用中间件

        分类: 
            应用级(自定义)
            内置(express内置)
            第三方(别人写的,需要下载)
            路由器

        什么是中间件: 就是一个函数
        function(req,res,next){}

        注意的问题: 
            1. 中间件要写在路由的前面
            2. next的作用是什么: 指向下一个中间件,调用则执行下一个中间件,如果不调用,后面的中间件以及路由的回调都不会执行
            3. req和res是什么,并且有什么特点
                req是请求对象
                res是响应对象

                一次请求和响应的过程中,所有的中间件和对应的路由的回调的req和res都指向的是同一个


            处理静态资源
            app.use(express.static('存放静态资源的文件夹的路径'))
            app.use(express.static('xxx'))
            项目名: 01-express
            01-express
                xxx
                  css 
                    index.css
                  js
                    index.js
                  views
                    index.html
                  yyy.html
                
                server.js 服务器代码

                请求index.html的url地址: http://127.0.0.1:5000/views/index.html
                请求index.css的url地址: http://127.0.0.1:5000/css/index.css
                请求yyy.html的url地址: http://127.0.0.1:5000/yyy 不能这样写,要请求静态资源,要写后缀名,不写后缀名,express就认为是一个路径

     

       



*/
