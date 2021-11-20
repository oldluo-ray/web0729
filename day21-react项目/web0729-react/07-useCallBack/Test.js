import React, { useState, useCallback } from 'react'
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
// }
export default function Test() {
  const [count, setCount] = useState(0)
  console.log('test渲染了,', count)

  // 如果Test组件更新,就会重新创建handle函数,浪费内存
  // const handle = () => {
  //   // console.log(count)
  //   setCount(count + 1)
  // }
  // 使用useCallBack优化函数,让函数只创建一次
  const handle = useCallback(() => {
    console.log('count-外层', count)
    setCount((count) => {
      console.log('count-内层', count)
      return count + 1
    })
  }, [])
  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
