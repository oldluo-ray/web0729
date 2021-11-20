/*

   1. 组件自定义事件

       作用: 子组件给父组件传递数据

       绑定事件: 

            <Test @事件名="事件处理函数"></Test>

            组件实例.$on('事件名', 事件处理函数)

       触发事件: 

            组件实例.$emit('事件名',参数)

   2. 全局事件总线

        作用: 组件之间传递数据

        原理: 让所有组件都可以访问到同一个vue实例,然后通过给这个vue实例绑定自定义事件的方式,传递数据. 需要接收数据的组件中,给vue实例绑定事件. 需要传递数据的组件中,触发这个自定义的事件

        实现: 

            1. 在入口文件中
                beforeCreate(){
                    Vue.prototype.$bus = this
                }

            2. 需要接收数据的组件中绑定事件
                组件实例.$bus.$on('事件名', 函数)

            3. 在要传递数据的组件中,触发事件
                组件实例.$bus.$emit('事件名', 数据)

   3. 插槽

        默认插槽  将组件子节点的所有内容,放到插槽中

            <slot>文本</slot>    

        具名插槽  将组件中指定的子节点,放到指定的插槽中

            <slot name="xxx"></slot>

            <div slot="xxx"></div>

            <template slot="xxx" v-slot:xxx>
            </template>

        作用域插槽 将组件内部的数据传递到组件子节点的位置上

                <slot :xxx="list"></slot>

                <template scope="obj">
                    {{obj.list}}
                </template>


   4. 配置代理

         作用: 解决跨域问题       

         配置文件的名字: vue.config.js

         简单配置代理:

              module.exports = {
                  devServer: {
                      proxy: '目标地址'

                      proxy: {
                          '/xxx':{
                              target: 目标地址,
                              pathRewrite: {'^/xxx':''},
                              
                          }
                      }
                  }
              }

   5. vuex

          使用: 
           1. 下包 npm i vuex
           
           2. 把vuex当做插件使用 Vue.use(vuex)

           3. 创建store

              new vuex.Store({
                  state:{},
                  actions:{
                      xxx({commit}, value){
                        commit()
                      }
                  },
                  mutations:{
                      yyy(state,value){
                        state.zzz = 值
                      }
                  }
              })

            4. 入口文件中,配置store
              new Vue({
                  ...,
                  store: store对象
              })


            5.在组件中获取数据

              组件实例.$store.state.xxx

            6. 触发actions的函数

               组件实例.$store.dispatch('函数名', 参数)

            7. 触发mutations的函数

               组件实例.$store.commit('函数名', 参数)

            
                        









*/
