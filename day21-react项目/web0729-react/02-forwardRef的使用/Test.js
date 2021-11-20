import React from 'react'

// export default function Test() {
//   return <div>test组件</div>
// }

export default React.forwardRef((props, ref) => {
  return <div ref={ref}>test组件</div>
})
// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     return <div>Test</div>
//   }
// }
