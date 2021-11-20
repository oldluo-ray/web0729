import React from 'react'
import Son from './components/Son'

// 写一个根组件
export default class App extends React.Component {
  // console.log(this)

  state = {
    money: '5毛钱',
  }
  render() {
    return (
      <div id="app">
        <Son></Son>
      </div>
    )
  }
}
