import React from 'react'
export default function (WrappedComponent) {
  return class extends React.Component {
    // 自定义react调试工具中组件展示的名字
    // react调用工具,会优先显示组件的displayName静态属性,如果没有则显示name静态属性. name属性只能获取不能赋值
    static displayName = 'With' + WrappedComponent.name // WithLogin/WithRegister
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
          // 将传入到高阶组件的props数据,全部传递给子组件
          {...this.props}
          handleChange={this.handleChange}
        ></WrappedComponent>
      )
    }
  }
}
