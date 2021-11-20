import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入redux-thunk这个中间件. redux-thunk可以帮我们在redux的代码里面写异步代码
import thunk from 'redux-thunk'

// 引入所有的reducer函数
import headReducer from '../components/Header/redux/reducer'
import footReducer from '../components/Footer/redux/reducer'
import itemReducer from '../components/Item/redux/reducer'

// 将多个reducer合并成一个
const rootReducer = combineReducers({
  // 键: 值
  headReducer,
  footReducer,
  itemReducer,
})

// const store = createStore(reducer, applyMiddleware(thunk,中间件,中间件))
// 既可以使用redux调试工具,又可以使用中间件

const store = createStore(
  rootReducer,
  // 第二个参数是可选参数: 用来初始化数据,优先级更高,但是实际开发一般不用
  { list: [] },
  composeWithDevTools(applyMiddleware(thunk))
)

// store.subscribe(() => {
//   const state = store.getState()
//   localStorage.setItem('todos', JSON.stringify(state.list))
// })
export default store
