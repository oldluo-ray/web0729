import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    num: 0,
  }

  // 当前组件的状态由父组件的props决定
  // 注意: 这个函数是一个静态的方法
  // 成员
  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    return {
      num: props.count,
    }
  }

  constructor() {
    super()
    console.log('组件开始创建-constructor')
  }
  render() {
    console.log('组件重新渲染了-render')
    return (
      <div>
        <h1>test组件-react组件的生命周期</h1>
        <div>{this.state.num}</div>
      </div>
    )
  }
  componentDidMount() {
    console.log('组件挂载了-componentDidMount')
  }

  componentDidUpdate() {
    // this.setState({
    //   num: this.props.count
    // })
    console.log('组件更新完成了-componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('组件即将卸载-componentWillUnmount')
  }
}
