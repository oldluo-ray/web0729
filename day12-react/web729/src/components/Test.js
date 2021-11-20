import React, { Component, PureComponent } from 'react'

export default class Test extends PureComponent {
  // shouldComponentUpdate可以控制当前组件是否重新渲染
  // 如果一个组件,里面的结构就是写死的,也没有数据,则直接写return false
  //   shouldComponentUpdate() {
  //     return false
  //   }

  state = {
    msg: 'hello',
    obj: {
      name: 'zs',
    },
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     // nextProps 表示父组件传过来的最新的props数据
  //     // this.props 表示上一次的props数据
  //     // console.log(nextProps, this.props)
  //     if (
  //       nextProps.count !== this.props.count ||
  //       nextState.msg !== this.state.msg
  //     ) {
  //       return true
  //     }
  //     return false
  //   }

  render() {
    console.log('test渲染了')
    return (
      <div>
        <h1>test</h1>
        <div>{this.props.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // this.setState({
            //   msg: 'react',
            // })
            // this.state.obj.name = 'ls'

            this.setState({
              obj: {name: 'ls'},
            })
          }}
        >
          按钮-修改test的msg
        </button>
      </div>
    )
  }
}
