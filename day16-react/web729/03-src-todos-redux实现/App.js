import React from 'react'

import Header from './containers/WithHeader'
import List from './components/List/List'
import Footer from './containers/WithFooter'
import Item from './containers/WithItem'
import './App.css'
export default function App(props) {
  // console.log(props)
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        {props.list.length ? (
          <>
            <List>
              {props.list.map((item) => (
                <Item todo={item} key={item.id}></Item>
              ))}
            </List>
            <Footer></Footer>
          </>
        ) : (
          <h1>恭喜没有任务</h1>
        )}
      </div>
    </div>
  )
}
