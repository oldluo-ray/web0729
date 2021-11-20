import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// const div = (
//   <div>
//     <h1>hello create-react-app</h1>
//     <div>哈哈哈</div>
//   </div>
// )

// 定义组件:
// 函数组件
// function 组件名(){
//     return jsx结构/null
// }

// 类组件

// class 组件名 extends React.Component {
//   render() {
//     return jsx结构 / null
//   }
// }
// 使用组件: 把组件当做标签去使用 , 可以是双标签,也可以是单标签
// react就是通过首字母是否大写,来区分是组件还是普通的标签
ReactDOM.render(<App></App>, document.getElementById('root'))
