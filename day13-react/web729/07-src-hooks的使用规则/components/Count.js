import React, { useState } from 'react'

// 注意: hook判断一个函数是组件还是普通函数,通过首字母大写判断
// 所以写的时候,要么不写函数名,也可以运行,要么就首字母大写
export default function Index() {
  const [count, setCount] = useState(0)
  // if (true) {

  // }

  return <div>{count}</div>
}
