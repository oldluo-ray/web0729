import React from 'react'
import { Provider } from 'react-redux'
import Count from './containers/WithCount'
import Msg from './containers/WithMsg'
import store from './store'
export default function App() {
  return (
    <Provider store={store}>
      <Count></Count>
      <Msg></Msg>
    </Provider>
  )
}
