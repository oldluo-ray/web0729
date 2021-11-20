import React, { useState, useEffect } from 'react'

export default function Count(props) {
  console.log('Count函数体中的代码执行了')
  // useState定义状态
  // 解构的count就是数据
  // 解构的setCount就是修改数据并且更新视图的方法
  // 传入的参数,就是默认值
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('hello')

  // useEffect模拟生命周期钩子函数
  // 模拟挂载完成,更新完毕和即将卸载
  // 外部函数模拟挂载完成和更新完毕
  // 内部函数模拟即将卸载

  // 注意:
  //   1. 外层函数模拟挂载和更新,所以更新时,先卸载. 为了避免重复的定时器或订阅等
  //   2. 第二个参数是一个数组,如果不写,外层函数一直模拟挂载和更新
  //   3. 第二个参数是一个数组,如果只写一个空数组,外层函数只模拟挂载
  //   4. 第二个参数是一个数组,如果数组中监听的某个数据(state和props)某个数据发生变化了,外层函数才会模拟更新,否则不模拟更新
  //   useEffect(() => {
  //     console.log('组件挂载或更新完毕了')
  //     // const id = setInterval(() => {
  //     //   setCount(count + 1)
  //     // }, 1000)
  //     return () => {
  //       console.log('组件卸载')
  //       //   clearInterval(id)
  //     }
  //   }, [props.num])

  //   useEffect(() => {
  //     return () => {}
  //   }, [])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{msg}</h1>
      <h2>{props.num}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        按钮-count
      </button>
      <button
        onClick={() => {
          setMsg('hooks')
        }}
      >
        按钮-msg
      </button>
    </div>
  )
}
