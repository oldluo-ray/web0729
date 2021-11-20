import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// BrowserRouter 内部使用了一个包: history  history.listen可以监听浏览器地址栏的变化. 然后根据Route配置的路由规则,让指定的组件挂载,其他组件卸载
// Route组件的作用: 配置前端路由规则
// Link组件的作用: 其实渲染的是a标签,可以修改路径,但是不发送请求

import Home from './components/Home' // Home目录下的js叫index.所以可以忽略
import Detail from './components/Detail/Detail'
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/detail">详情页</Link>
        {/* 使用Route配置路由规则 */}

        {/* 路由的匹配规则: 
           模糊匹配(默认):  pathname以path开头则匹配成功(分段比较) 
           精确匹配: pathname和path要完全一致
        
          pathname: 就是浏览器地址栏的路径
          path: 就是Route组件的path的值


          pathnamne: /detail
          path: /
          path: /home
          path: /detail


          模糊匹配详解: 
          注意: 所以pathname以path开头,是以/分段比较的
          pathname: /abc/def/g
          path: /a         no
          path: /abc        yes
          path: /abc/d     no
          path: /abc/g     no
          path: /g      no
          path: /def    no
          path: /ab    no
        
        

        */}
        <Route path="/ab" component={Home}></Route>
        {/* exact表示开启精确匹配.注意:只有添加了exact属性的Route才是精确匹配,其他的Route没有写,就依然是模糊匹配 */}
        {/* <Route path="/" component={Home} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route> */}
      </div>
    </BrowserRouter>
  )
}
