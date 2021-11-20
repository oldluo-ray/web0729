import React from 'react'
import './Item.css'
export default function Item(props) {
  const { todo } = props
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isDone} onChange={() => {}} />
        <span className={todo.isDone ? 'active' : ''}>{todo.todoName}</span>
      </label>
      <button className="btn btn-danger">删除</button>
    </li>
  )
}
