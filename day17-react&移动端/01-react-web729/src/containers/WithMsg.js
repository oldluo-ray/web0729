import { connect } from 'react-redux'
import Msg from '../components/Msg/Msg'
import { setMsg } from '../components/Msg/redux/actions'
export default connect((state) => ({ msg: state.yyy.msg }), { setMsg })(Msg)
