// 1. 创建store对象
// 1.1 引入创建store的方法
import { createStore } from 'redux'
// 1.2 为了创建store,先创建reducer函数
// reducer函数返回什么, store中的数据就被修改成什么
// reducer函数的执行时机:
// 1. 创建store的时候,调用reducer,目的是为了初始化数据
// 2. store.dispatch(action对象)的时候调用reducer.目的是为了修改数据
const initState = { count: 0, msg: 'hello', info: 'redux' }
// 给state设置默认值,是为了初始化数据
function reducer(state = initState, action) {
  // state 接收到的是最新的数据
  // action 就是需求对象
  // console.log('reducer被调用了', state, action)
  switch (action.type) {
    case 'add':
      return {
        ...state,
        // msg: '',
        // info: '',
        // count:
        count: state.count + 1,
      }
    case 'addNum':
      return {
        ...state,
        count: state.count + action.x,
      }

    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
// 1.3 调用方法,创建
const store = createStore(reducer)

// 回调函数在数据变化的时候会触发
store.subscribe(() => {
  console.log('数据变化了', store.getState())
})

// console.log(store.getState()) //查看store中的数据
// 修改数据
// store.dispatch会导致reducer函数执行
store.dispatch({ type: 'add' })
// console.log(store.getState())
store.dispatch({ type: 'sub' })
// console.log(store.getState())
store.dispatch({ type: 'addNum', x: 3 })
