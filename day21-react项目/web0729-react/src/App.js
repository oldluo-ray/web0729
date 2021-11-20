import React, { useState, useEffect } from 'react'
import FancyInput from './Test'

const inputRef = React.createRef()
class App extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(inputRef.current)
            console.log(inputRef.current.focus())
          }}
        >
          按钮
        </button>
        <FancyInput ref={inputRef}></FancyInput>
      </div>
    )
  }
}

export default App
