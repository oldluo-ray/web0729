import React from 'react'

export default function Count(props) {
  return (
    <div>
      <h1>计数</h1>
      <div>{props.count}</div>
      <button
        onClick={() => {
          props.addAsync(6)
        }}
      >
        按钮
      </button>
    </div>
  )
}
