import { connect } from 'react-redux'
import { addFn, subFn } from '../redux/actions'
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

// function mapDispatchToProps(dispatch) {
//   return {
//     add: (num) => {
//       dispatch(addFn(num))
//       // dispatch({ type: 'ADD', num:1 })
//     },
//     sub(num) {
//       dispatch(subFn(num))
//     },
//   }
// }
// const WithCount = connect(mapStateToProps, mapDispatchToProps)(Count)
// 注意:
// 1. mapState简写的时候,注意要用小括号包裹对象,否则解析时会把对象的{}当做函数的结构的{}
// 2. mapDispatch简写,connect函数会自动帮助我们封装一个对象,函数名和actionCreator的名字一致
const WithCount = connect((state) => ({ xx: state.count }), { addFn, subFn })(
  Count
)

// const obj = {
//   addFn: (num) => {
//     dispatch(addFn(num))
//   },
//   subFn: (num) => {
//     dispatch(subFn(num))
//   },
// }

export default WithCount
