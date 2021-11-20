import React, { Component } from 'react'

export default class Son extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    // this.props.obj = [1, 2, 3]
    this.props.obj.name = 'ls'
    console.log(this.props)
    const { Com } = this.props
    // const Test = this.props.com
    return (
      <div>
        <h1>son组件</h1>
        <div>{this.props.xxx}</div>
        {this.props.ele}
        {/* <this.props.com></this.props.com> */}
        {/* <Test /> */}
        <Com></Com>
      </div>
    )
  }
}

// export default function Son(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>son组件</h1>
//       <div>{props.xxx}</div>
//     </div>
//   )
// }
