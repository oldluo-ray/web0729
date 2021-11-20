import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE,
} from './constants'

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

export { addFn, updateFn, deleteFn, checkAllFn, clearAllDoneFn }
