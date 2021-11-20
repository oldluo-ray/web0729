import React from 'react'
import './index.css'
export default function Home(props) {
  console.log('home', props)
  return (
    <div className="wrap">
      <h1>home组件</h1>
      <button
        onClick={() => {
          // props.history.push('要跳转的目标路径', 要传递的数据)
          // props.history.push('/detail', { msg: 'hahaha', from: '/home' })
          // props.history.replace('/detail', { msg: 'hahaha', from: '/home' })
        }}
      >
        按钮
      </button>
    </div>
  )
}
