import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  const [list, setList] = useState([
    {
      todoName: '吃饭',
      isDone: false,
      id: 1,
    },
    {
      todoName: '睡觉',
      isDone: true,
      id: 2,
    },
  ])

  useEffect(() => {
    // 添加
    const tokenAdd = PubSub.subscribe('add', (msg, todoName) => {
      console.log('pubsub中的list:', list)

      const todoObj = {
        todoName,
        isDone: false,
        id: Date.now(),
      }

      //根据旧数据,创建新数据
      const newList = [...list]

      newList.push(todoObj)

      setList(newList)
    })
    //修改单个
    const tokenUpdate = PubSub.subscribe('update', (msg, id) => {
      const newList = [...list]

      newList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })

      setList(newList)
    })

    // 删除单个
    const tokendelete = PubSub.subscribe('delete', (msg, id) => {
      const newList = list.filter((item) => item.id !== id)
      setList(newList)
    })
    // 全选
    const tokenallCheck = PubSub.subscribe('allcheck', (msg, checked) => {
      const newList = list.map((item) => {
        item.isDone = checked
        return item
      })

      setList(newList)
    })

    return () => {
      PubSub.unsubscribe(tokenAdd)
      PubSub.unsubscribe(tokenUpdate)
      PubSub.unsubscribe(tokendelete)
      PubSub.unsubscribe(tokenallCheck)
    }
  })

  function clearHandle() {
    const newList = list.filter((item) => !item.isDone)
    setList(newList)
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        {list.length ? (
          <>
            <List>
              {list.map((item) => (
                <Item key={item.id} todo={item}></Item>
              ))}
            </List>
            <Footer list={list} clearHandle={clearHandle}></Footer>
          </>
        ) : (
          <h1>恭喜您没有任务</h1>
        )}
      </div>
    </div>
  )
}
