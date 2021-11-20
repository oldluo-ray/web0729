import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    // 注意: JSON.parse()里面如果传入的是null,解析完还是null. 如果是undefined就报错.
    list: JSON.parse(localStorage.getItem('todos')) || [],
  }

  componentDidUpdate() {
    // 生命周期钩子函数中的this,都是当前组件实例
    localStorage.setItem('todos', JSON.stringify(this.state.list))
  }

  getTodoName = (todoName) => {
    // console.log(todoName)
    // 根据todoName创建任务对象
    const obj = {
      todoName,
      isDone: false,
      id: Date.now(),
    }

    const { list } = this.state
    list.push(obj)
    this.setState({
      list,
    })

    // 将最新的数据,存储到localStorage中
    // localStorage.setItem('todos', JSON.stringify(list))
  }

  getTodoIdUpdate = (id) => {
    this.state.list.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list: this.state.list,
    })
    // 将最新的数据,存储到localStorage中
    // localStorage.setItem('todos', JSON.stringify(this.state.list))
  }

  getTodoIdDelete = (id) => {
    // console.log(id)
    const newList = this.state.list.filter((item) => item.id !== id)
    this.setState({
      list: newList,
    })
    // 将最新的数据,存储到localStorage中
    // localStorage.setItem('todos', JSON.stringify(newList))
  }

  getTodosStatus = (checked) => {
    // console.log(checked)
    this.state.list.forEach((item) => (item.isDone = checked))
    this.setState({
      list: this.state.list,
    })
    // 将最新的数据,存储到localStorage中
    // localStorage.setItem('todos', JSON.stringify(this.state.list))
  }

  deleteAllDoneTodos = () => {
    const newList = this.state.list.filter((item) => !item.isDone)
    this.setState({
      list: newList,
    })
    // 将最新的数据,存储到localStorage中
    // localStorage.setItem('todos', JSON.stringify(newList))
  }
  render() {
    const { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoName={this.getTodoName}></Header>
          {list.length ? (
            <div>
              <List
                list={list}
                getTodoIdUpdate={this.getTodoIdUpdate}
                getTodoIdDelete={this.getTodoIdDelete}
              ></List>
              <Footer
                list={list}
                getTodosStatus={this.getTodosStatus}
                deleteAllDoneTodos={this.deleteAllDoneTodos}
              ></Footer>
            </div>
          ) : (
            <h1>恭喜您,没有任务</h1>
          )}
        </div>
      </div>
    )
  }
}
