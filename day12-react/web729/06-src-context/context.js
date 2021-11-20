// 1. 创建context对象
// context对象中提供了两个组件, 一个叫Provider, 一个叫Consumer
// 要传递数据的组件中使用Provider
// 要接收数据的组件中使用Consumer
import React from 'react'
// createContext(默认值) 默认值是在不写Provider的时候生效
export const context = React.createContext('1块钱')
