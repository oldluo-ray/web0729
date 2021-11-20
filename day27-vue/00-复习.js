/*

    vuex
    
        map系列

            作用: 在组件中方便获取数据

            import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

            computed:{
                ...mapState(['数据']),
                ...mapGetters(['数据'])
            }
            methods:{
                ...mapActions(['函数']),
                ...mapMutations(['函数'])
            }

        modules

            1. 创建module对象

            {
                namespaced: true
                state:{},
                getters:{},
                actions:{},
                mutations:{}
            }

            2. 配置module对象
            new vuex.Store({
                modules: {
                    键: module对象                
                }
            })

            3. 使用数据

             computed:{
                ...mapState('xxx',['数据']),
                ...mapGetters('xxx',['数据'])
            }
            methods:{
                ...mapActions('xxx',['函数']),
                ...mapMutations('xxx',['函数'])
            }


    vue-router

        基本使用

            1. 下包 vue-router

            2. 配置路由表

                new vueRouter({
                    routes: [
                        {
                            path: 
                            component:
                        }
                    ]
                })


            3. 在入口文件中

                Vue.use(vueRouter)

                new Vue({
                    router: 路由对象
                })

            4. 使用

                <router-link replace  active-class="自定义类名" to="目标路径">文本</router-link>

                <router-view></router-view>

        嵌套路由

                new vueRouter({
                    routes: [
                        {
                            path: 
                            component:
                            children: [
                                {
                                    path: 不写斜杠 
                                    component:
                                }
                            ]
                        }
                    ]
                })
                

        命名路由

            作用: 跳转的时候,直接写路由的名字,不需要写路径
            
            定义: 

            routes: [
                        {
                            path: 
                            component:
                            children: [
                                {
                                    name: '自定义的名字'
                                    path: 不写斜杠 
                                    component:
                                }
                            ]
                        }
                    ]


            <router-link :to="{name: 名字}"></router-link>


        路由传参

                props: 将数据以props的形式传给组件

                    props: true   将路由参数通过props传给组件

                    props: {}  写死的数据

                    props($route){   可以通过$route拿到路由参数和查询字符串
                        return {

                        }
                    }
                
                查询字符串

                    $route.query

                路由参数

                <router-link :to="{
                    // 注意: name可以和params配合使用,但是path不可以
                    name: 'xxx',
                    params: {
                        a: 1
                    }
                }"></router-link>

                    $route.params









*/
