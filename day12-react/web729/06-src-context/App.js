import React, { Component } from 'react'
import Far from './components/Far'
// 利用context将App的数据,直接传给Son组件
// 为了保证只有一个context,将创建context的代码,写在其他的js中,通过引入的方式获取
import { context } from './context'

export default class App extends Component {
  state = {
    msg: '5毛钱',
  }
  render() {
    return (
      // 使用Provider包裹整个App的结构. 因为App是要传递数据的组件
      // Provider要写一个value属性,值就是要传递的数据
      // <context.Provider value={this.state.msg}>
      <div>
        <Far></Far>
      </div>
      // </context.Provider>
    )
  }
}
