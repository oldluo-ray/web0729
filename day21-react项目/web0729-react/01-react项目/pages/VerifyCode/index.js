import React, { useEffect, useState } from 'react'
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
import { sendCode } from '../../api/login'
import { verifyCode } from '../../api/regist'
import './index.css'
import msg from './msg.png'
const num = 5
let code = null
export default function VerifyCode(props) {
  const [count, setCount] = useState(num)
  const [isDisabled, setIsDisabled] = useState(true)
  // console.log(count)
  useEffect(async () => {
    sendCodeHandle()
  }, [])

  async function sendCodeHandle() {
    // 发送验证码请求
    const phone = localStorage.getItem('phone')

    await sendCode(phone)
    //说明请求发送成功了
    //倒计时
    const timeid = setInterval(() => {
      // 由于闭包: 所以这里获取count永远是5
      // console.log(count)
      // 使用回调函数的写法: 这个接收的count就是最新的数据
      setCount((count) => {
        if (count === 1) {
          clearInterval(timeid)
        }
        return count - 1
      })
    }, 1000)
  }

  function reSendHandle() {
    if (count !== 0) return
    setCount(num)
    sendCodeHandle()
  }
  return (
    <div className="wrap">
      <NavBar mode="light" icon={<Icon type="left" color="#000" />}>
        硅谷注册
      </NavBar>
      <WhiteSpace size="lg"></WhiteSpace>

      <WingBlank size="lg">
        <div className="img">
          <img src={msg} alt="" />
        </div>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank size="lg">
          <div>
            我们将以短信或电话的形式将验证码发送给您，请注意接听0575/025/0592/010等开头的电话
          </div>
        </WingBlank>
        <WhiteSpace size="lg"></WhiteSpace>

        <div className="code">
          <InputItem
            clear
            placeholder="请输入手机验证码"
            onChange={(value) => {
              code = value.trim()
              setIsDisabled(!/^\d{6}$/.test(code))
            }}
          ></InputItem>
          <button
            className={count ? 'code-btn' : 'code-btn active'}
            onClick={reSendHandle}
          >
            {count ? `重新发送(${count}s)` : '获取验证码'}
          </button>
        </div>
        <WingBlank size="lg">
          <Button
            className="code-next"
            type="warning"
            disabled={isDisabled}
            onClick={async () => {
              const phone = localStorage.getItem('phone')
              const result = await verifyCode(phone, code)
              // console.log(result)
              if (result.data.success) {
                props.history.push('/registerPassword')
              } else {
                Toast.fail(result.data.message)
              }
            }}
          >
            下一步
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
