import { ADD } from './constants'
const initState = {
  count: 9,
}

export default function (state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.num,
      }

    default:
      return state
  }
}
