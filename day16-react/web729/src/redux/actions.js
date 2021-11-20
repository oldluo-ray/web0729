import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE,
} from './constants'

// 同步action
function addFn(todoName) {
  return { type: ADD_TODO, todoName }
}
function updateFn(id) {
  return { type: UPDATE_TODO, id }
}
function deleteFn(id) {
  return { type: DELETE_TODO, id }
}
function checkAllFn(checked) {
  return { type: CHECK_ALL_TODO, checked }
}
function clearAllDoneFn() {
  return { type: CLEAR_ALL_DONE }
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

export { addFn, updateFn, deleteFn, checkAllFn, clearAllDoneFn, addFnAsync }
