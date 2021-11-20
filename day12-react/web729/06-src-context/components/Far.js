import React, { Component } from 'react'
import Son from './Son'
import { context } from '../context'
export default class Far extends Component {
  render() {
    return (
      <context.Consumer>
        {(value) => {
          return (
            <div>
              far-{value}
              <Son></Son>
            </div>
          )
        }}
      </context.Consumer>
    )
  }
}
