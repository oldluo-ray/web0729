import React, { Component, useState } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
} from 'antd-mobile'
import { registe } from '../../api/regist'
import './index.css'
import msg from './msg.png'
let password = null
export default function VerifyCode(props) {
  const [isShow, setIsShow] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <div className="wrap">
      <NavBar
        mode="light"
        icon={<Icon type="left" color="#000" />}
        onLeftClick={() => console.log(111)}
      >
        硅谷注册
      </NavBar>
      <WhiteSpace size="lg"></WhiteSpace>

      <WingBlank size="lg">
        <div className="img">
          <img src={msg} alt="" />
        </div>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="lg">
          <div className="tip">请设置登录密码</div>
        </WingBlank>
        <WhiteSpace size="lg"></WhiteSpace>

        <div className="code">
          <InputItem
            className="psw"
            type={isShow ? 'text' : 'password'}
            clear
            placeholder="请设置8~20位登录密码"
            extra={
              <span
                onClick={() => {
                  setIsShow(!isShow)
                }}
                className={
                  isShow ? 'iconfont icon-yanjing' : 'iconfont icon-close-eye'
                }
              ></span>
            }
            onChange={(val) => {
              password = val.trim()
              setIsDisabled(!/^web0729[\w]{1,5}$/.test(password))
            }}
          ></InputItem>
        </div>
        <WingBlank size="lg">
          <div>
            密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
          </div>
        </WingBlank>
        <WingBlank size="lg">
          <Button
            className="code-next"
            type="warning"
            disabled={isDisabled}
            onClick={async () => {
              const phone = localStorage.getItem('phone')
              const result = await registe(phone, password)
              // console.log(result)
              props.history.push('/home', result.data.data.user)
            }}
          >
            完成
          </Button>
        </WingBlank>
        <WingBlank size="lg">
          遇到问题了?
          <a href="">请联系客服</a>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
