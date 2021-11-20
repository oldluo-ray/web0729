import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_ALL_DONE,
} from './constants'
const initState = {
  list: JSON.parse(localStorage.getItem('todos')) || [],
}

export default function reducer(state = initState, action) {
  let newList
  let id
  switch (action.type) {
    case ADD_TODO:
      //添加
      const todoName = action.todoName
      // 创建任务对象
      const todo = {
        todoName,
        isDone: false,
        id: Date.now(),
      }
      // 将任务对象,添加list中
      newList = [...state.list]
      newList.push(todo)
      return {
        ...state,
        list: newList,
      }

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
