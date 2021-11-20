import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Message from '../Message'
import News from '../News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/home/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/home/message">Message</NavLink>
            </li>
          </ul>
          <div>
            <div>
              <Route path="/home/news" component={News}></Route>
              <Route path="/home/message" component={Message}></Route>
              {/* <News></News>
              <Message></Message> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
