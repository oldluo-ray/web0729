import React from 'react'

// 写一个根组件
// 获取组件中的某个标签的真实dom
// 1. 创建ref对象
const xxxRef = React.createRef()
const yyyRef = React.createRef()

export default class App extends React.Component {
  handle = () => {
    // 3. 在需要的时候获取真实dom
    console.log(xxxRef.current.value)
    console.log(yyyRef.current)
  }
  render() {
    return (
      <div id="app">
        用户名:
        {/*  2. 将ref对象和虚拟dom进行绑定 */}
        <input type="text" ref={xxxRef} />
        <h1 ref={yyyRef}>123</h1>
        <button onClick={this.handle}>按钮</button>
      </div>
    )
  }
}
