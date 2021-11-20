import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    console.log('login组件', this.props)
    const { state, handleChange } = this.props
    return (
      <div>
        <h1>登录</h1>
        <form>
          用户名:
          <input
            type="text"
            value={state.username}
            onChange={handleChange('username')}
          />
          <br />
          密码:
          <input
            type="password"
            value={state.password}
            onChange={handleChange('password')}
          />
          <br />
          <input type="button" value="登录" />
        </form>
      </div>
    )
  }
}
// Login.name = 'xxx'
// Login.displayName = 'xxx'
// console.log()
