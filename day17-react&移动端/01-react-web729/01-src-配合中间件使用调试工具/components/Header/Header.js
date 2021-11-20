import React from 'react'
import './Header.css'
export default function Header(props) {
  function handle(e) {
    if (e.keyCode !== 13) return
    const todoName = e.target.value.trim()
    if (!todoName) return

    props.addFnAsync(todoName)

    e.target.value = ''
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyUp={handle} />
    </div>
  )
}
