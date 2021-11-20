import React, { useEffect, useState } from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { getCountryData } from '../../api/common'
import './index.css'
const Item = List.Item
export default function Country(props) {
  const [countryData, setcountryData] = useState({})
  useEffect(async () => {
    const result = await getCountryData()

    setcountryData(result.data.data)
  }, [])

  const keyList = Object.keys(countryData)

  function linkHandle(e) {
    e.preventDefault()
    // console.log(12)
    // 点击谁,就找到谁所对应的dom元素,然后通过js原生的方法scrollIntoView让其自动滚动进入可视区
    // console.log()
    const id = e.target.innerText
    const ele = document.querySelector(id === '*' ? '#top' : `#${id}`)
    // console.log(ele)
    ele.scrollIntoView()
    
  }

  const changeNumberHandle = (number) => (e) => {
    // 1. 将区号存储起来
    // console.log(number)
    localStorage.setItem('area-number', number)
    // 2. 返回上一个页面
    props.history.goBack()
  }

  return (
    <div>
      <div className="fixed-top">
        <NavBar
          mode="light"
          icon={<Icon type="left" color="black" />}
          onLeftClick={() => props.history.goBack()}
        >
          硅谷注册登录
        </NavBar>
      </div>

      {/* countryData是一个对象,对象中有多少个键值对,就渲染多少个List组件 */}

      <div className="keys-list">
        {keyList.map((item) => (
          <a href="" key={item} onClick={linkHandle}>
            {item}
          </a>
        ))}
      </div>

      <div className="country-list">
        {keyList.map((item) => {
          const countryList = countryData[item]
          return (
            <List
              id={item === '*' ? 'top' : item}
              key={item}
              renderHeader={() => item}
              className="my-list"
            >
              {countryList.map((item) => {
                // item {国家名称: 区号}
                const key = Object.keys(item)[0]
                return (
                  <Item
                    key={key}
                    extra={item[key]}
                    onClick={changeNumberHandle(item[key])}
                  >
                    {key}
                  </Item>
                )
              })}
            </List>
          )
        })}
      </div>
    </div>
  )
}
