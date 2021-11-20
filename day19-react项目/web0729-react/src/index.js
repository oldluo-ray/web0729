import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// 直接引入rem适配的代码,只是让代码执行
import './utils/fixed'
// 引入antd-mobile的css样式(懒加载之后,就不需要引入了)
// import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<App />, document.getElementById('root'))
