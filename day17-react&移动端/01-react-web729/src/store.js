import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import reducer from './reducer'
import countReducer from './components/Count/redux/reducer'
import msgReducer from './components/Msg/redux/reducer'

// const rootReducer = combineReducers({
//   countReducer,
//   msgReducer,
// })
const rootReducer = combineReducers({
  xxx: countReducer,
  yyy: msgReducer,
})

export default createStore(
  rootReducer,
  // 当只有一个reducer的时候,第二个参数的优先级更高.但是如果合并reducer了,第二个参数的优先级不如合并的reducer
  //   { count: 100, msg: 'xxxx' },
  composeWithDevTools(applyMiddleware(thunk))
)
