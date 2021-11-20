import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
} from 'antd-mobile'
// import Pmd from '../components/pmd'

export default function Login(props) {
  const [areaNumber] = useState(localStorage.getItem('area-number') || '86')

  return (
    <div className="wrap">
      <NavBar
        mode="light"
        icon={<Icon type="left" color="black" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        硅谷注册登录
      </NavBar>
      <InputItem clear placeholder="请输入手机号">
        <div
          className="input-wrap"
          onClick={() => {
            props.history.push('/country')
          }}
        >
          <span>+{areaNumber}</span>
          <Icon type="down"></Icon>
        </div>
      </InputItem>
      <WingBlank>
        <div className="input-code">
          <InputItem placeholder="请输入手机验证码"></InputItem>
          {/* <WingBlank> */}
          <span>获取验证码</span>
          {/* </WingBlank> */}
        </div>
        <WhiteSpace size="xl"></WhiteSpace>
        <WingBlank>
          <Button type="warning" disabled className="btn-login">
            登录
          </Button>
          <WhiteSpace size="xl"></WhiteSpace>
          <div className="link-rl">
            <Link to="/login">账号密码登录</Link>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault()
                props.history.push('/registerPhone')
                localStorage.setItem('isShow', true)
              }}
            >
              手机快速注册
            </a>
          </div>
          <WhiteSpace size="xl"></WhiteSpace>
          <WhiteSpace size="xl"></WhiteSpace>
          <WhiteSpace size="xl"></WhiteSpace>
          <WhiteSpace size="xl"></WhiteSpace>
          <div className="line-wrap">
            <div className="line"></div>
            <span>其他登录方式</span>
            <div className="line"></div>
          </div>
          <WhiteSpace size="xl"></WhiteSpace>
          <div className="icon-wrap">
            <i
              className="iconfont icon-github"
              onClick={() => {
                //给gitHub发送请求
                window.location.href =
                  'https://github.com/login/oauth/authorize?client_id=9e66c440e1aea39416e0'
              }}
            ></i>
            <i className="iconfont icon-wechat"></i>
            <i className="iconfont icon-qq"></i>
          </div>
          <WhiteSpace size="xl"></WhiteSpace>
          <div className="bottom">
            <span>
              未注册的手机号验证后将自动创建硅谷账号, 登录即代表您已同意
              <a href="http://www.atguigu.com">硅谷隐私政策</a>
            </span>
          </div>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
