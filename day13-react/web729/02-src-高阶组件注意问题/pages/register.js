import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    const { state, handleChange } = this.props
    return (
      <div>
        <h1>注册</h1>
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
          确认密码:
          <input
            type="repassword"
            value={state.repassword}
            onChange={handleChange('repassword')}
          />
          <br />
          <input type="button" value="注册" />
        </form>
      </div>
    )
  }
}
