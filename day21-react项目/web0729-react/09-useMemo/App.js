import React, { useState, useEffect } from 'react'
import Test from './Test'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Test></Test>
      </div>
    )
  }
}

export default App
