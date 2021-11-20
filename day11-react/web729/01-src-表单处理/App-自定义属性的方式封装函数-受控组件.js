import React from 'react'

// 写一个根组件
export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    isAgree: false,
    city: 'sz',
  }

  // handle = (e) => {
  //   const name = e.target.dataset.state
  //   // console.log(1)
  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
  //   // console.log(value)
  //   this.setState({
  //     [name]: value,
  //   })
  // }
  handle = (e) => {
    const name = e.target.dataset.state
    // console.log(1)
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    // console.log(value)
    this.setState({
      [name]: value,
    })
  }
  // handlePsw = (e) => {
  //   // console.log(1)
  //   const value = e.target.value.trim()
  //   // console.log(value)
  //   this.setState({
  //     password: value,
  //   })
  // }
  // handleCheck = (e) => {
  //   // console.log(1)
  //   const value = e.target.checked
  //   // console.log(value)
  //   this.setState({
  //     isAgree: value,
  //   })
  // }

  // handleSel = (e) => {
  //   // console.log(1)
  //   const value = e.target.value
  //   // console.log(value)
  //   this.setState({
  //     city: value,
  //   })
  // }

  render() {
    return (
      <div id="app">
        用户名:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handle}
          data-state="username"
        />
        <br />
        密码:
        <input
          type="password"
          value={this.state.password}
          onChange={this.handle}
          data-state="password"
        />
        <br />
        用户隐私政策:
        <input
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.handle}
          data-state="isAgree"
        />
        <br />
        选择城市:
        <select
          name=""
          id=""
          value={this.state.city}
          onChange={this.handle}
          data-state="city"
        >
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="sz">深圳</option>
        </select>
      </div>
    )
  }
}
