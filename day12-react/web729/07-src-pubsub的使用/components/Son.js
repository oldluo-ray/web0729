import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
  render() {
    return (
      <div>
        son
        <button
          onClick={() => {
            PubSub.publish('fp', { house: '大别墅', car: '小牛' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
