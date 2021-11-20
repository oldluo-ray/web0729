import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super()
    console.log('组件开始创建-constructor')
  }
  render() {
    console.log('组件重新渲染了-render')
    return (
      <div>
        <h1>test组件-react组件的生命周期</h1>
      </div>
    )
  }
  componentDidMount() {
    console.log('组件挂载了-componentDidMount')
  }

  componentDidUpdate() {
    console.log('组件更新完成了-componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('组件即将卸载-componentWillUnmount')
  }
}
