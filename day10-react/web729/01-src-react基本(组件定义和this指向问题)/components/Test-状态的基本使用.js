import React from 'react'
export default class Test extends React.Component {
  constructor() {
    // 构造器中的this一定是当前组件的实例
    super()

    this.state = {
      count: 0,
      msg: 'hello',
    }
  }
  render() {
    // render中的this一定是当前组件的实例
    return (
      <div>
        <h1>test组件</h1>
        <div>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // this.state.count++
            // console.log(this.state.count)
            // 作用: 1. 修改数据 2. 更新视图
            this.setState({
              count: this.state.count + 1,
            })
            // 因为setState不是立刻修改数据,而是把修改数据的行为放到队列中等待执行. 下面打印状态值的时候,其实数据还没有修改呢
            // console.log(this.state.count)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
