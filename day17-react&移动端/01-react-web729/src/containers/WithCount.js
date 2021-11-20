import { connect } from 'react-redux'
import Count from '../components/Count/Count'
import { addAsync } from '../components/Count/redux/actions'
export default connect((state) => ({ count: state.xxx.count }), { addAsync })(Count)
