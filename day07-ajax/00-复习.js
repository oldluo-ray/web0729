/*

    ajax


        ajax是什么:

            是浏览器中发送请求的一种方式


        ajax的特点: 

            1. 异步发送请求
            
            2. 不会跳转页面


        ajax的使用:

            1. 创建xhr 

                const xhr = new XMLHttpRequest()

            2. 设置请求行 请求方式和url地址
                
                xhr.open(请求方式, url地址)

            3. 设置请求头 描述请求主体中数据的格式 如果不设置,请求可以正常发送,但是数据服务器拿不到

                xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

            4. 设置请求主体并发送请求
                name: zs age:18
                xhr.send('name=zs&age=18')


            5. 监听readyState的变化

                xhr.onreadystatechange=function(){
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            xhr.responseText
                        }
                    }
                }

            6. readyState为4表示响应完成



            7. status为200表示成功

            8. responseText获取响应主体信息












*/
