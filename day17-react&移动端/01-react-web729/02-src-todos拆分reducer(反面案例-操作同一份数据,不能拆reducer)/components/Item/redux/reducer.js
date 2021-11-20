import { UPDATE_TODO, DELETE_TODO } from './constants'
const initState = {
  list: [],
}

export default function reducer(state = initState, action) {
  let newList
  let id
  switch (action.type) {
    case UPDATE_TODO:
      //修改
      id = action.id
      console.log(id)
      console.log(state)

      newList = state.list.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
        return { ...item }
      })

      return {
        ...state,
        list: newList,
      }
    case DELETE_TODO:
      //删除
      id = action.id

      newList = state.list.filter((item) => item.id !== id)

      return {
        ...state,
        list: newList,
      }

    default:
      return state
  }
}
