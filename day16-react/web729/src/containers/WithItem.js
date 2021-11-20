import { connect } from 'react-redux'
import Item from '../components/Item/Item'
import { updateFn, deleteFn } from '../redux/actions'
// 注意: Header组件,要修改数据,不需要渲染数据,所以第一个参数写一个null,占个位置即可
export default connect(null, { updateFn, deleteFn })(Item)
