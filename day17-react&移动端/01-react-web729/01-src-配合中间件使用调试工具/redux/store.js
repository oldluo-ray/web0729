import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入redux-thunk这个中间件. redux-thunk可以帮我们在redux的代码里面写异步代码
import thunk from 'redux-thunk'
import reducer from './reducer'
// const store = createStore(reducer, applyMiddleware(thunk,中间件,中间件))
// 既可以使用redux调试工具,又可以使用中间件
console.log(process.env.NODE_ENV)
const store = createStore(
  reducer,
  // 第二个参数是可选参数: 用来初始化数据,优先级更高,但是实际开发一般不用
  // { list: [] },
  process.env.NODE_ENV === 'devlopment'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('todos', JSON.stringify(state.list))
})
export default store
