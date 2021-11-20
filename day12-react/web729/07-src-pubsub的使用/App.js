import React, { Component } from 'react'
import Far from './components/Far'
import PubSub from 'pubsub-js'
export default class App extends Component {
  // App是要接收数据的角色,所以先订阅
  componentDidMount() {
    // PubSub.subscribe('话题',回调函数)
    // 当发布了对应的话题,回调函数就会被触发
    this.token = PubSub.subscribe('fp', (topic, data) => {
      // topic就是话题
      // data是具体穿过来的数据
      console.log(topic, data)
    })
  }
  componentWillUnmount() {
    PubSub.(unsubscribethis.token)
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            PubSub.publish('jiafa', '秦皇岛特产')
          }}
        >
          按钮
        </button>
        <Far></Far>
      </div>
    )
  }
}
