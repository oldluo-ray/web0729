import { connect } from 'react-redux'
import Footer from '../components/Footer/Footer'
import { checkAllFn, clearAllDoneFn } from '../redux/actions'
// 注意: Header组件,要修改数据,不需要渲染数据,所以第一个参数写一个null,占个位置即可
export default connect((state) => ({ list: state.list }), {
  checkAllFn,
  clearAllDoneFn,
})(Footer)
