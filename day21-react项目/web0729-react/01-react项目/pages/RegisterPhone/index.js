import React, { useState, useEffect } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Modal,
  Toast,
} from 'antd-mobile'
import { verifyPhone } from '../../api/regist'
// import Pmd from '../components/pmd'
// import './Login.css'
let phone = null //存储手机号
export default function RegisterPhone(props) {
  const [areaNumber] = useState(localStorage.getItem('area-number') || '86')

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    // 判断是从哪个页面来的,如果从login来,则展示模态框,否则不展示
    const isShow = localStorage.getItem('isShow')
    isShow === 'true' &&
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
    return () => {
      localStorage.setItem('isShow', null)
    }
  }, [])

  function changeHandle(val) {
    phone = val.trim()
    // if () {
    //   // 让下一步按钮高亮
    //   setIsDisabled(false)
    // } else {
    //   // 禁用下一步按钮
    //   setIsDisabled(true)
    // }
    setIsDisabled(!/^1[3456789]\d{9}$/.test(phone))
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
            onClick={async () => {
              // 发送ajax请求
              const result = await verifyPhone(phone)
              //判断,如果手机号可用,则跳到下一个页面
              // 如果手机号不可用,则提示用户,然后然后到login页面
              if (result.data.success) {
                //提示用户modal
                Modal.alert(undefined, '我们将发送短信/语音验证码至:' + phone, [
                  {
                    text: '不同意',
                  },
                  {
                    text: '同意',
                    onPress: () => {
                      localStorage.setItem('phone', phone)
                      //进入到下一个页面
                      props.history.push('/registerCode')
                    },
                    style: { backgroundColor: 'red', color: '#fff' },
                  },
                ])
              } else {
                // 提示用户,回到login
                Toast.info(result.data.message, 2, () => {
                  props.history.push('/login')
                })
              }
            }}
          >
            下一步
          </Button>
        </WingBlank>
      </WingBlank>
    </div>
  )
}
