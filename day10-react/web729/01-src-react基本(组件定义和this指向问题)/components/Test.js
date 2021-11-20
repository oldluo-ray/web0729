import React from 'react'

export default class Test extends React.Component {
  // constructor() {
  //   // 构造器中的this一定是当前组件的实例
  //   super()

  //   this.state = {
  //     count: 0,
  //     msg: 'hello',
  //   }
  // }
  state = {
    count: 0,
    msg: 'hello',
  }
  // handle是原型上的方法.其实不是真正的事件处理函数.在底层调用的时候,相当于就是普通调用
  // handle() {
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  // }

  // es7中在类里面新增的定义函数的语法.直接将函数,添加到了实例上
  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    console.log('render函数被调用了')
    // render中的this一定是当前组件的实例
    return (
      <div>
        <h1>test组件</h1>
        <div id="count">{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
