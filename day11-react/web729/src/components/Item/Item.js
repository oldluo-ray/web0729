import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  updateHandle = (id) => (e) => {
    // console.log(id)
    this.props.getTodoIdUpdate(id)
  }
  deleteHandle = (id) => () => {
    this.props.getTodoIdDelete(id)
  }
  render() {
    const { todo } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={this.updateHandle(todo.id)}
          />
          <span className={todo.isDone ? 'active' : ''}>{todo.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.deleteHandle(todo.id)}>
          删除
        </button>
      </li>
    )
  }
}
