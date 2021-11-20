import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('todos', JSON.stringify(state.list))
})
export default store
