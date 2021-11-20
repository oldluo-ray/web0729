import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Son from './Son'

export default class Far extends Component {
  // Far是要接收数据的角色,所以先订阅
  componentDidMount() {
    // PubSub.subscribe('话题',回调函数)
    // 当发布了对应的话题,回调函数就会被触发
    this.token1 = PubSub.subscribe('fp', (topic, data) => {
      // topic就是话题
      // data是具体穿过来的数据
      console.log(topic, data)
    })
    this.token2 = PubSub.subscribe('jiafa', (topic, data) => {
      // topic就是话题
      // data是具体穿过来的数据
      console.log(topic, data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(token1)
    PubSub.unsubscribe(token2)
  }
  render() {
    return (
      <div>
        far
        <button
          onClick={() => {
            // 清除指定订阅
            // PubSub.unsubscribe(this.id)
            // PubSub.unsubscribe('fp')
            // PubSub.clearAllSubscriptions()
          }}
        >
          far-按钮
        </button>
        <Son></Son>
      </div>
    )
  }
}
