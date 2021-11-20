import React, { Component } from 'react'
import Test from './components/Test'
export default class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}
        >
          按钮
        </button>
        {this.state.count <= 5 && <Test count={this.state.count}></Test>}
      </div>
    )
  }
}
