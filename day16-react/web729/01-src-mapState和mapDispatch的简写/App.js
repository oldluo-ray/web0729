import React from 'react'
import Test from './compnents/Test'
import Count from './containers/WithCount'
import store from './redux/store'

// 在react中使用redux. 要使用包react-redux
// 1. 下载 npm i react-redux
// 2. 引入:
//   2.1 要在入口文件或跟组件中,引入Provider组件,用于包裹整个项目. 将store对象传递下去
//   2.2 在需要使用redux数据的组件中,引入高阶组件函数connect.用于获取数据
//    import {connect} from 'react'redux'
//    const WithCount = connect()(Count)
import { Provider } from 'react-redux'
export default function App() {
  return (
    // Provider使用的时候,必须添加一个store属性,值就是redux的store对象
    // 目的: 是为了将redux中的store传递给需要的组件
    <Provider store={store}>
      <Test></Test>
      <hr />
      <Count></Count>
    </Provider>
  )
}
