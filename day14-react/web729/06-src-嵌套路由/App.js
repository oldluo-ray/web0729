import React from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  withRouter,
} from 'react-router-dom'
// BrowserRouter 内部使用了一个包: history  history.listen可以监听浏览器地址栏的变化. 然后根据Route配置的路由规则,让指定的组件挂载,其他组件卸载
// Route组件的作用: 配置前端路由规则
// Link组件的作用: 其实渲染的是a标签,可以修改路径,但是不发送请求

// 编程式导航:
// 注意: 只有被Route管理的组件,才能通过props获取到这三个对象
// history
//  push
//  replace
// location
//  state 获取push/replace的第二个参数
// match
// params 获取路由参数

// 路由参数:
// 定义
// <Route path="/路径/:参数?" component={组件}></Route>

// 传递
// 浏览器地址栏
// Link或NavLink
// history.push/replace

import Home from './components/Home' // Home目录下的js叫index.所以可以忽略
import Detail from './components/Detail/Detail'

import './App.css'

function App(props) {
  console.log('app', props)
  return (
    <div>
      <NavLink to="/home" activeClassName="select">
        首页
      </NavLink>
      <NavLink to="/detail" activeClassName="select">
        详情页
      </NavLink>

      {/* 在Route组件上,定义路由参数 */}
      <Route path="/home" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
    </div>
  )
}
const WithApp = withRouter(App)
export default WithApp
