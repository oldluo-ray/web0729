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
  console.log('App根组件的结构中的list:', list)

  useEffect(() => {
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

    return () => {
      PubSub.unsubscribe(tokenAdd)
    }
  })
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>
            {list.map((item) => (
              <Item key={item.id} todo={item}></Item>
            ))}
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
