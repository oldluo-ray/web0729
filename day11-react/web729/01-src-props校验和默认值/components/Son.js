import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Son extends Component {
  // props校验,给使用者提供更加清晰的提示信息
  static propTypes = {
    msg: PropTypes.node.isRequired,
    list: PropTypes.array.isRequired,
  }
  // props默认值,如果没有传,则生效
  static defaultProps = {
    list: ['傻瓜', '要写一个属性', '叫做list', '值是数组'],
  }
  render() {
    return (
      <div>
        <h1>son组件</h1>
        {this.props.msg}
        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
