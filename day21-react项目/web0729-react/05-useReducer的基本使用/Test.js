import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'reset':
      return {
        ...state,
        count: action.init,
      }
  }
}

export default function Test() {
  const [state, dispatch] = useReducer(reducer, { count: 0, msg: '哈哈' })
  return (
    <>
      Count: {state.count}
      msg: {state.msg}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset', init: 0 })}>
        reset
      </button>
    </>
  )
}
