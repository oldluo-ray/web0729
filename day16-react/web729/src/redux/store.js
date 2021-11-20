import { applyMiddleware, createStore } from 'redux'
// 引入redux-thunk这个中间件. redux-thunk可以帮我们在redux的代码里面写异步代码
import thunk from 'redux-thunk'
import reducer from './reducer'
// const store = createStore(reducer, applyMiddleware(thunk,中间件,中间件))
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('todos', JSON.stringify(state.list))
})
export default store
