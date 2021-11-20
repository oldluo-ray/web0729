import { CHECK_ALL_TODO, CLEAR_ALL_DONE } from './constants'
const initState = {
  list:  [],
}

export default function reducer(state = initState, action) {
  let newList
  switch (action.type) {
    case CHECK_ALL_TODO:
      //全选
      const checked = action.checked

      newList = state.list.map((item) => {
        item.isDone = checked
        return { ...item }
      })

      return {
        ...state,
        list: newList,
      }
    case CLEAR_ALL_DONE:
      //删除所有完成项

      newList = state.list.filter((item) => {
        return !item.isDone
      })

      return {
        ...state,
        list: newList,
      }
    default:
      return state
  }
}
