import React from 'react'
import Test from './Test'
import context from './context'
const { Provider } = context
export default function App() {
  return (
    <Provider value={'hello useContext'}>
      <h1>这是app</h1>
      {/* 组件在哪里使用,组件的结构就渲染到哪里 */}
      <Test></Test>
      <hr />
    </Provider>
  )
}
