import React from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'
// BrowserRouter 内部使用了一个包: history  history.listen可以监听浏览器地址栏的变化. 然后根据Route配置的路由规则,让指定的组件挂载,其他组件卸载
// Route组件的作用: 配置前端路由规则
// Link组件的作用: 其实渲染的是a标签,可以修改路径,但是不发送请求

import Home from './components/Home' // Home目录下的js叫index.所以可以忽略
import Detail from './components/Detail/Detail'

import './App.css'
export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Link to="/home">首页</Link>
        <Link to="/detail">详情页</Link> */}
        <NavLink to="/home" activeClassName="select">
          首页
        </NavLink>
        <NavLink to="/detail" activeClassName="select">
          详情页
        </NavLink>
        {/* <Link to="/xxx">xxx</Link> */}
        {/* 如果pathname变化,所有的Route都会被比较,即便是前面的匹配成功l,后面的Route依然会继续进行匹配.但是如果Route被Switch包裹,则前面的比较成功,后面的就不比较了 */}
        {/* <Switch> */}
        {/* Redirect组件,只要执行,就会立刻重定向. 
          to属性的值,表示重定向到哪里
        
        */}
        {/* 需求: 只有当pathname是/xxx的时候,才要重定向到/detail */}
        {/* from的作用: 表示当pathname是from的值的时候,才重定向 
            注意: 如果要让from生效,就必须使用Switch包裹Redirect.否则from无效
          */}
        {/* <Redirect from="/xxx" to="/detail"></Redirect> */}
        {/* 使用Route配置路由规则 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        {/* <Route path="/xxx" component={Home}></Route> */}
        {/* <Route path="/" component={Home}></Route> */}
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  )
}
