import React from 'react'

export default function Msg(props) {
  return (
    <div>
      <h1>展示信息</h1>
      <div>{props.msg}</div>
      <button
        onClick={() => {
          props.setMsg('hello combineReducers')
        }}
      >
        按钮
      </button>
    </div>
  )
}
