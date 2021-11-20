import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {
  const [todoName, setTodoName] = useState('')

  function handle(e) {
    setTodoName(e.target.value.trim())
  }

  function enterHandle(e) {
    if (e.keyCode !== 13 || !todoName) return
    PubSub.publish('add', todoName)
    setTodoName('')
  }
  return (
    <div className="todo-header">
      <input
        type="text"
        value={todoName}
        onChange={handle}
        onKeyUp={enterHandle}
      />
    </div>
  )
}
