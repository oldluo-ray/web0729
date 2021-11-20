import Demo from './components/Demo'
import Test from './components/Test'
// 写一个根组件
export default function () {
  // console.log(this)
  return (
    <div id="app">
      <Demo></Demo>
      <hr />
      <Test></Test>
      <hr />
      <Test></Test>
    </div>
  )
}
