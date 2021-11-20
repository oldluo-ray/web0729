import { ADD } from './constants'

// 修改count,异步修改(延迟一秒钟)
function add(num) {
  return { type: ADD, num }
}
function addAsync(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000)
  }
}

export { addAsync }
