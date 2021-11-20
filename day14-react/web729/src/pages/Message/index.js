import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home/message/1">message001</NavLink>
          </li>
          <li>
            <NavLink to="/home/message/2">message002</NavLink>
          </li>
          <li>
            <NavLink to="/home/message/3">message003</NavLink>
          </li>
        </ul>
        <button
          onClick={() => {
            this.props.history.push('/home/message/4', {
              from: '/home/message',
            })
          }}
        >
          添加
        </button>
        <button
          onClick={() => {
            this.props.history.replace('/home/message/5')
          }}
        >
          替换
        </button>
        <Route path="/home/message/:id" component={Detail}></Route>
      </div>
    )
  }
}
