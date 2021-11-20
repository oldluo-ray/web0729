import React from 'react'

function Test(props) {
  console.log('Test组件渲染了-' + props.count)
  return <div>{props.count}</div>
}
// React.memo类似于类组件中的纯组件
export default React.memo(Test)
