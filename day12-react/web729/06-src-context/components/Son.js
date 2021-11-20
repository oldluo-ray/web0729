import React, { Component } from 'react'
// 注意: 要保证传递数据的context和接收数据的context是同一个
import { context } from '../context'
export default class Son extends Component {
  static contextType = context
  render() {
    return (
      // <context.Consumer>
      //   {(value) => {
      //     return
      //   }}
      // </context.Consumer>
      <div>son,{this.context}</div>
    )
  }
}
