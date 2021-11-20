import React, { useState, useEffect } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
} from 'antd-mobile'
// import Pmd from '../components/pmd'
// import './Login.css'

export default function RegisterPhone(props) {
  const [areaNumber] = useState(localStorage.getItem('area-number') || '86')

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    Modal.alert(
      '注册协议及隐私政策',
      '在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：',
      [
        {
          text: '不同意',
          onPress: () => props.history.goBack(),
        },
        {
          text: '同意',
          onPress: () => {
            localStorage.setItem('flag', true)
          },
          style: { backgroundColor: 'red', color: '#fff' },
        },
      ]
    )
  }, [])

  function changeHandle(val) {
    const value = val.trim()
    // if () {
    //   // 让下一步按钮高亮
    //   setIsDisabled(false)
    // } else {
    //   // 禁用下一步按钮
    //   setIsDisabled(true)
    // }
    setIsDisabled(!/^1[3456789]\d{9}$/.test(value))
  }

  return (
    <div className="wrap">
      <NavBar
        mode="light"
        icon={<Icon type="left" color="black" />}
        onLeftClick={() => props.history.goBack()}
      >
        硅谷注册登录
      </NavBar>
      <InputItem clear placeholder="请输入手机号" onChange={changeHandle}>
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
        <WhiteSpace size="xl"></WhiteSpace>
        <WingBlank>
          <Button
            type="warning"
            disabled={isDisabled}
            className="btn-login"
            onClick={() => {
              console.log('点击了')
            }}
          >
            下一步
          </Button>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
