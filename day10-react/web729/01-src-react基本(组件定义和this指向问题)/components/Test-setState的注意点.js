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
        <div id="count">{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // this.setState({
            //   count: this.state.count + 1,
            //   msg: 'react',
            // })
            // this.setState({
            //   count: this.state.count + 2,
            // })
            // this.setState({
            //   count: this.state.count + 3,
            // })
            // this.setState((state, props) => {
            //   return {
            //     count: state.count + 1,
            //   }
            // })
            // this.setState((state, props) => {
            //   return {
            //     count: state.count + 2,
            //   }
            // })
            // this.setState((state, props) => {
            //   return {
            //     count: state.count + 3,
            //   }
            // })
            // this.setState(
            //   {
            //     count: 4,
            //   },
            //   () => {
            //     // 第二个参数,是当数据修改完毕,并且视图更新完毕才执行
            //     console.log(this.state)
            //     console.log(document.querySelector('#count'))
            //   }
            // )
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
