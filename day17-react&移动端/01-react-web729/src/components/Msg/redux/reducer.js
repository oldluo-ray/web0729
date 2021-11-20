import { CHANGE_MSG } from './constants'
const initState = {
  msg: 'hello redux',
}

export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_MSG:
      return {
        ...state,
        msg: action.msg,
      }

    default:
      return state
  }
}
