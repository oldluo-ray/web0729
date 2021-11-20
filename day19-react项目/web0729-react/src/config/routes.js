// 这样的引入方式,会导致所有组件一上来就全部加载了
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Test from '../pages/Test'
// import Demo from '../pages/Demo'
// 使用懒加载的方式加载组件
import React from 'react'
const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
const Test = React.lazy(() => import('../pages/Test'))
const Demo = React.lazy(() => import('../pages/Demo'))
// 配置路由表
export default [
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/test',
        component: Test,
      },
      {
        path: '/home/demo',
        component: Demo,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]
