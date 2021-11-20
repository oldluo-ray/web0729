import { connect } from 'react-redux'
import { addFn } from '../redux/actions'
import Count from '../compnents/Count'
// 这样写代码.默认Count组件只能通过props获取到store的dispatch方法,可以修改数据,但是无法获取到数据
// const WithCount = connect()(Count)

// 要获取到store中的数据
// 作用: 将redux中store对象的state数据,通过props传递给Count组件
//调用时机: 1. connect函数第一次执行的时候. 2.当redux数据变化的时候,会被调用
function mapStateToProps(state) {
  // state就是redux中所有的数据
  console.log('mapStateToProps执行了')
  return {
    xx: state.count,
  }
}

function mapDispatchToProps(dispatch) {
  return {
     add(num){
       dispatch(addFn(num))
     }
  }
}
const WithCount = connect(mapStateToProps, mapDispatchToProps)(Count)

export default WithCount
