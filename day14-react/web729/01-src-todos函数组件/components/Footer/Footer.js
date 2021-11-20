import React from 'react'
import PubSub from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  const doneTotal = props.list.filter((item) => item.isDone).length
  const allTotal = props.list.length
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={doneTotal === allTotal}
          onChange={(e) => {
            PubSub.publish('allcheck', e.target.checked)
          }}
        />
      </label>
      <span>
        <span>已完成 {doneTotal}</span> / 全部 {allTotal}
      </span>
      <button className="btn btn-danger" onClick={props.clearHandle}>
        清除已完成任务
      </button>
    </div>
  )
}
