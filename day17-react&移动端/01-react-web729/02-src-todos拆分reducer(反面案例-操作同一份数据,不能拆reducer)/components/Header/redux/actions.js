import { ADD_TODO } from './constants'

// 同步action
function addFn(todoName) {
  return { type: ADD_TODO, todoName }
}

// 为了配合redux-thunk,要在actions中定义异步代码
// 异步的action
function addFnAsync(todoName) {
  return (dispatch) => {
    //执行异步操作
    setTimeout(() => {
      dispatch(addFn(todoName))
    }, 1000)
  }
}

export { addFn, addFnAsync }
