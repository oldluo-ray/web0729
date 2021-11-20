import React from 'react'
import Test from './Test'
const xxxRef = React.createRef()
const yyyRef = React.createRef()
export default function App() {
  return (
    <div>
      <h1 ref={xxxRef}>app</h1>
      <Test ref={yyyRef}></Test>
      <button
        onClick={() => {
          console.log(xxxRef.current)
          console.log(yyyRef.current)
        }}
      >
        按钮
      </button>
    </div>
  )
}
