import React, { Component } from 'react'

// export default class Son extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>son组件</h1>
//         <div>{this.props.xxx}</div>
//       </div>
//     )
//   }
// }

export default function Son(props) {
  console.log(props)
  return (
    <div>
      <h1>son组件</h1>
      <div>{props.xxx}</div>
    </div>
  )
}
