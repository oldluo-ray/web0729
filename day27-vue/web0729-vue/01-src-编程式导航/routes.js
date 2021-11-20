// 配置路由表
import vueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Message from './components/Message'
import News from './components/News'
import Detail from './components/Detail'
export default new vueRouter({
  // routes属性用于配置路由表
  routes: [
    {
      // 路由的路径
      path: '/',
      // 路由的组件
      component: Home,
    },
    {
      // 路由的路径
      path: '/home',
      // 路由的组件
      component: Home,
      // 二级路由
      children: [
        {
          //注意: 嵌套路由的路径,不需要加/
          path: 'news',
          // 路由的组件
          component: News,
          children: [
            {
              name: 'detail',
              path: 'detail/:page?/:pageSize?',
              component: Detail,
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
            },
          ],
        },
        {
          //注意: 嵌套路由的路径,不需要加/
          path: 'message',
          // 路由的组件
          component: Message,
        },
      ],
    },
    {
      // 路由的路径
      path: '/about',
      // 路由的组件
      component: About,
    },
  ],
})
