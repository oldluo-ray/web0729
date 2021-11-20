import { ADD_TODO } from './constants'
const initState = {
  list:  [],
}

export default function reducer(state = initState, action) {
  let newList

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
    default:
      return state
  }
}
