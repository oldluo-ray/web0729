import React from 'react'
import './Item.css'
export default function Item(props) {
  const { todo, updateFn, deleteFn } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            updateFn(todo.id)
          }}
        />
        <span>{todo.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteFn(todo.id)
        }}
      >
        删除
      </button>
    </li>
  )
}
