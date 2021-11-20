import React, { useEffect } from 'react'
import style from './Detail.module.css'
console.log(style)
export default function Detail() {
  useEffect(() => {
    console.log('挂载了')
    return () => {
      console.log('卸载了')
    }
  }, [])
  return (
    <div className={style.wrap}>
      <h1>详情页</h1>
    </div>
  )
}
