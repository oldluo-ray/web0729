import React from 'react'
export default function (WrappedComponent) {
  return class withComponent extends React.Component {
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }

    render() {
      return (
        <WrappedComponent
          state={this.state}
          handleChange={this.handleChange}
        ></WrappedComponent>
      )
    }
  }
}
