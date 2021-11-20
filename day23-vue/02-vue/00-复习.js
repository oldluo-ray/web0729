/*


    1. vue的基本使用

        1.1 引入vue.js
        1.2 定义模板
        <div>
        </div>
        1.3 创建vue实例,绑定模板和数据
        new Vue({
            el: '模板的选择器',
            data: {} 数据
        })

    2. 模板中插入数据

        定义数据: 
        new Vue({
            data:{
                xxx:123
            }
        })

        <div>{{xxx}}</div>
        <input type="text" v-bind:value="xxx"/>
        <input type="text" :value="xxx"/>
       


    3. 模板中双向数据绑定
         <input type="text" v-model="xxx"/>
         谁代理了谁?
         vue实例代理了new Vue里面data

         MVVM 

            M 数据
            V 模板
            VM vue实例

    4. 模板中注册事件
        
        需求:  a标签, 要注册一个点击事件.要阻止默认行为,要阻止冒泡
        <a href="" @click.stop.prevent="事件处理函数"></a>

        new Vue({
            ...,
            methods:{
                函数名(){

                }
            }
        })


        self  事件目标是自己的时候才触发
        once  事件只触发一次
        key/keyCode 按键修饰符 enter/13

    5. 计算属性

          根据已有的数据,计算一个新的数据(会添加到vm实例上)  

          new Vue({
              ...,
              computed:{
                 属性名: {
                     // getter执行时机: 1. 初始化 2.依赖的数据发生变化时
                     get(){},
                     set(val){}
                 }
                 //简写: 
                 属性名(){}
              }
          })



    6. 监听属性

            监听已有的数据的变化

            new Vue({
                ...,
                watch: {
                    属性名: {
                        immediate: true, // 初始化执行
                        deep: true, 深层监视
                        // 执行时机: 当监视的数据发生变化才触发
                        handler(newValue, oldValue){

                        }
                    }
                    简写: 
                    属性名(newValue, oldValue){

                    }
                }
            })


    监听属性和计算属性的区别: 


           1. 监听的是有的数据, 计算属性是根据已有的数据计算一个新的数据
           2. 监听属性可以实现的.计算属性不一定能实现(异步). 计算能实现的,监听一定能实现 


    7. 处理样式

            行内
                //注意: 属性名要写小驼峰, 要写单位
                <div :style="{属性: 值}"></div>
                <div :style="[{属性: 值}]"></div>

            类名

                <div class="对象/数组/字符串"></div>

                <div :class="{类名: true, 类名: false}"></div> 值为true则生效
                <div :class="[类名,类名]"></div> 
                <div class="类名"></div> 













*/
