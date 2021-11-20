import React, { Component, PureComponent } from 'react'
import Test from './components/Test'
export default class App extends PureComponent {
  state = {
    count: 0,
  }
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count !== this.state.count) {
  //     return true
  //   }
  //   return false
  // }
  render() {
    console.log('app渲染了')
    return (
      <>
        <h1>app </h1>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.getRandomIntInclusive(1, 2),
            })
          }}
        >
          按钮
        </button>
        <hr />
        <Test count={this.state.count}></Test>
      </>
    )
    // return (
    //   <React.Fragment>
    //     <h1>hello </h1>
    //     <h2>react</h2>
    //   </React.Fragment>
    // )
  }
}
