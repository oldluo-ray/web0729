import { ADD, SUB } from './constants'
const initState = {
  count: 99,
  msg: 'hello redux',
}
export default function (state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.num,
      }
    case SUB:
      return {
        ...state,
        count: state.count - action.num,
      }
    default:
      return state
  }
}
