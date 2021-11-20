import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// 直接引入rem适配的代码,只是让代码执行
import './utils/fixed'

ReactDOM.render(<App />, document.getElementById('root'))
