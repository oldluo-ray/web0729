import React, { Component } from 'react'
import Count from './components/Count'
export default class App extends Component {
  state = {
    isShow: true,
    count: 99,
  }
  render() {
    return (
      <div>
        {this.state.isShow && <Count num={this.state.count}></Count>}
        <button
          onClick={() => {
            this.setState({
              isShow: false,
            })
          }}
        >
          卸载Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 10,
            })
          }}
        >
          app-count减
        </button>
      </div>
    )
  }
}
