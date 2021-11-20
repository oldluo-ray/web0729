import { connect } from 'react-redux'
import App from '../App'

export default connect((state) => {
  // console.log(state)
  return {
    list: state.list,
  }
})(App)
