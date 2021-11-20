import {
 
  UPDATE_TODO,
  DELETE_TODO,
 
} from './constants'

// 同步action

function updateFn(id) {
  return { type: UPDATE_TODO, id }
}
function deleteFn(id) {
  return { type: DELETE_TODO, id }
}




export { updateFn, deleteFn,  }
