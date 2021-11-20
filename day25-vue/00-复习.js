/*

    1.vue的生命周期钩子

        初始化
            beforeCreate
            created

        挂载
            beforeMount
            mounted

        更新
            beforeUpdate
            updated

        卸载
            beforeDestroy
            destroyed

    2. 单文件组件

            .vue 

            template 结构 有且仅有一个根标签

            script js  创建组件的相关代码

                Vue.extend({
                    data(){
                        return {

                        }
                    }
                })

                {
                     data(){
                        return {
                            
                        }
                    }               
                 }

            style  样式  添加属性scoped 样式只作用于当前组件

    3. ref

             作用: 获取真实dom和组件实例
             
             <div ref="xxx"></div>
             <Test ref="yyy"></Test>

             组件实例.$refs.xxx
             组件实例.$refs.yyy


    4. props

            作用: 将父组件的数据传递给子组件

            传: 
                 <Son :属性="数据"></Son>

            接收: 
                 子组件: 
                 props: ['属性']  数据添加到了实例上

                 props: {
                     属性: 数据类型
                 }

                 props: {
                     属性: {
                         type: 数据类型
                         default: 默认值
                         required: 必填项
                     }
                 }
    
    5. 混入

           作用:  将组件中公用的数据和逻辑封装起来
           
           使用: 


                 1. 封装混入对象
                 {
                     data(){},
                     methods: {},
                     computed:{},
                     mounted(){},
                     watch(){}
                 }

                 2. 使用混入对象

                    局部:  
                        {
                            mixins:[混入对象]
                        }
                    全局混入:
                    Vue.mixin(混入对象)

    6. 插件

                    
        作用:  将全局配置的内容封装起来

        使用: 

             定义插件对象
             {
                 install(Vue, ...args){
                    配置全局的内容
                    Vue.prototype.xxx = 值
                 }
             }

             使用插件

             Vue.use(插件对象)
                        









*/
