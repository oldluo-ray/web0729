import React, { useEffect } from 'react'
import style from './Detail.module.css'
console.log(style)
export default function Detail(props) {
  console.log(props.location.state)
  console.log('detail', props)
  useEffect(() => {
    console.log('挂载了')
    return () => {
      console.log('卸载了')
    }
  }, [])
  return (
    <div className={style.wrap}>
      <h1>详情页</h1>
      <button
        onClick={() => {
          // props.history.push('要跳转的目标路径', 要传递的数据)
          // props.history.push('/detail', { msg: 'hahaha', from: '/home' })
          props.history.replace('/home/5/6', { msg: 'hahaha', from: '/home' })
        }}
      >
        按钮-to-home
      </button>
    </div>
  )
}
