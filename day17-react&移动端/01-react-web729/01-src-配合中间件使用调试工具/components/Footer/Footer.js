import React from 'react'

import './Footer.css'
export default function Footer(props) {
  const allTotal = props.list.length
  const doneTotal = props.list.filter((item) => item.isDone).length
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={allTotal === doneTotal}
          onChange={(e) => {
            props.checkAllFn(e.target.checked)
          }}
        />
      </label>
      <span>
        <span>已完成 {doneTotal}</span> / 全部 {allTotal}
      </span>
      <button className="btn btn-danger" onClick={props.clearAllDoneFn}>
        清除已完成任务
      </button>
    </div>
  )
}
