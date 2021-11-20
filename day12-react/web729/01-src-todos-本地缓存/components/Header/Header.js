import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }
  handle = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }
  keyUpHandle = (e) => {
    if (e.keyCode !== 13) return
    const { todoName } = this.state
    const { getTodoName } = this.props
    if (!todoName) return

    // 添加
    // 调用app传过来的函数,将任务名传递给app组件
    getTodoName(todoName)
    // 清空文本框
    this.setState({
      todoName: '',
    })
  }
  render() {
    const { todoName } = this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          value={todoName}
          onChange={this.handle}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
