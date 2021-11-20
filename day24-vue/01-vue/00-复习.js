/*


    1. 条件渲染

        v-if   删除元素

        v-show  通过css隐藏



    2. 列表渲染

        <li v-for="item,index in 数组" :key="index"></li> 
        <li v-for="item,index of 对象" :key="index"></li> 


    3. 收集表单数据
            <input type="text" v-model="username" />
            <input type="radio" name="sex" v-model="sex" value="男"/>
            <input type="radio" name="sex" v-model="sex" value="女"/>

            <input type="checkbox" value="吃饭" v-model="hobby"/>
            <input type="checkbox" value="睡觉" v-model="hobby"/>

            data:{
                username: ''
                sex: ''
                hobby: []
            }


         
    4. 过滤器

            定义: 

                全局: 
                    Vue.filter('过滤器名称',(val)=>{
                        return 计算后的值
                    })

                局部: 
                    new Vue({
                        ...,
                        filters: {
                            过滤器名(val, 参数){
                                return 计算后的值
                            }
                        }
                    })


            使用: 

                <div>{{数据 | 过滤器 | 过滤器(参数)}}</div>
                <input v-bind:value="数据 | 过滤器 | 过滤器(参数)"></input>

    5. 内置指令

            v-text

                    将数据添加到标签的子节点,不解析html

            v-html

                    将数据添加到标签的子节点,解析html


            v-cloak

                    解决页面加载慢,出现括号的问题

    6. 自定义指令 

            定义

                    全局

                        Vue.directive('指令名', 回调/对象)

                    局部
                        new Vue({
                            ...,

                            directives:{
                                指令名: {
                                    bind(元素,绑定信息){} 初始化
                                    inserted(元素,绑定信息){} 插入到dom树上
                                    update(元素,绑定信息){} 更新的时候
                                },
                                指令名(){

                                }
                            }
                        })
            
            

            使用

                <div v-指令名="数据"></div>
*/
