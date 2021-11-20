import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/register'
import withForm from './WithComponent'
const WithLogin = withForm(Login)
const WithRegister = withForm(Register)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin count={99} xxx={`123`} zzz={true}></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
