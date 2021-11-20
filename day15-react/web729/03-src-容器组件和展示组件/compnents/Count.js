import React from 'react'

export default function Count(props) {
  console.log(props)
  return (
    <div>
      <h1>我是count组件,我要使用redux中的数据</h1>
      <div>{props.xx}</div>
      <button
        onClick={() => {
          props.add(1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          props.add(2)
        }}
      >
        +2
      </button>
    </div>
  )
}
