import React from 'react'
import Son from './components/Son'

function Test() {
  return <h3>我是test组件</h3>
}
// 写一个根组件
export default class App extends React.Component {
  
  // console.log(this)

  state = {
    money: '5毛钱',
  }
  render() {
    return (
      <div id="app">
        <Son ele={<h2>123</h2>} Com={Test} obj={{ name: 'zs' }}></Son>
      </div>
    )
  }
}
