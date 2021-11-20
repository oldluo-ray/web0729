import React, { useContext } from 'react'
import context from './context'
export default function Test() {
  // result就是要传递的数据
  const result = useContext(context)
  console.log(result)
  return <div></div>
}
