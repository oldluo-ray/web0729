import React, { Component } from 'react'

import './Footer.css'
export default class Footer extends Component {
  allCheckHandle = (e) => {
    const { checked } = e.target
    this.props.getTodosStatus(checked)
  }

  render() {
    const { list } = this.props

    const allTotal = list.length
    const doneTotal = list.filter((item) => item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={allTotal === doneTotal}
            onChange={this.allCheckHandle}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button
          className="btn btn-danger"
          onClick={this.props.deleteAllDoneTodos}
        >
          清除已完成任务
        </button>
      </div>
    )
  }
}
