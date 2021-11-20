import React from 'react'
import store from '../redux/store'

export default function Count() {
  return (
    <div>
      <h1>我是count组件,我要使用redux中的数据</h1>
      <div>{store.getState().count}</div>
      <button
        onClick={() => {
          store.dispatch({ type: 'ADD' })
          console.log(store.getState())
        }}
      >
        +
      </button>
    </div>
  )
}
