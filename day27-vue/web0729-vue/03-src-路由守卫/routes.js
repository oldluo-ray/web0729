// 配置路由表
import vueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Message from './components/Message'
import News from './components/News'
import Detail from './components/Detail'
const router = new vueRouter({
  // routes属性用于配置路由表
  routes: [
    // {
    //   // 路由的路径
    //   path: '/',
    //   // 路由的组件
    //   component: Home,
    // },
    {
      // 路由的路径
      path: '/home',
      // 路由的组件
      component: Home,
      meta: {
        title: '首页',
      },

      // 二级路由
      children: [
        {
          //注意: 嵌套路由的路径,不需要加/
          path: 'news',
          // 路由的组件
          component: News,
          // 元数据
          meta: {
            // isAuth: true,
            title: '新闻',
          },
          children: [
            {
              name: 'detail',
              path: 'detail/:page?/:pageSize?',
              component: Detail,
              // 元数据
              meta: {
                isAuth: true,
                title: '详情',
              },
              // props: { count: 0, msg: 'hello vue-router' },
              // 将路由参数,以props的形式传给组件
              // props: true,
              // 将组件可以接收到的所有的数据,以props的形式传给组件
              props($route) {
                // $route就是组件实例上的$route
                return {
                  x: $route.params.page,
                  y: $route.params.pageSize,
                  z: $route.query.name,
                  w: $route.query.age,
                  count: 99,
                }
              },

              beforeEnter(to, from, next) {
                if (localStorage.getItem('token')) next()
              },
            },
          ],
        },
        {
          //注意: 嵌套路由的路径,不需要加/
          path: 'message',
          // 路由的组件
          component: Message,
          // 元数据
          meta: {
            isAuth: true,
            title: '信息',
          },
        },
      ],
    },
    {
      // 路由的路径
      path: '/about',
      // 路由的组件
      component: About,
      // 元数据
      meta: {
        isAuth: true,
        title: '关于',
      },
    },
  ],
})

// 配置全局前置路由守卫
// 触发时机: 当项目中任何一个视图要展示之前触发
// router.beforeEach((to, from, next) => {
//   //to 其实就是一个$route对象,记录了目标路由的信息
//   //from 其实就是一个$route对象,记录了起始路由的信息
//   // next是一个函数,调用则切换视图,不调用则不切换视图
//   console.log(to, from)
//   // 判断能够切换视图
//   // 示例: 需求: 如果跳到detail的时候,传递了路由参数page,就可以切换到detail.否则就不切换.其他的路由都不进行管理
//   // if (to.name === 'detail' && to.params.page === undefined) return
//   // next()

//   //需求: 如果用户登录了,就可以访问所有页面,如果没有登录就只能访问home
//   // 判断是否登录的依据,就是localStorage中是否有token
//   // const token = localStorage.getItem('token')
//   // if (token) {
//   //   next()
//   // } else {
//   //   if (to.path === '/home') {
//   //     next()
//   //   }
//   // }

//   if (to.meta.isAuth && !localStorage.getItem('token')) return
//   next()
// })

// // 配置全局后置路由守卫
// router.afterEach((to, from) => {
//   document.title = to.meta.title || 'web0729'
// })
export default router
