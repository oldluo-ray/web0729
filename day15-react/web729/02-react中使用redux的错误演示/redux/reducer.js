const initState = {
  count: 99,
  msg: 'hello redux',
}
export default function (state = initState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
