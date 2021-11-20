import React, { useState } from 'react'

export default function Test() {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'zs',
    },
    {
      id: 2,
      name: 'ls',
    },
    {
      id: 3,
      name: 'ww',
    },
  ])
  return (
    <div>
      <input
        type="text"
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            const newList = [...list]
            newList.unshift({
              id: Date.now(),
              name: e.target.value.trim(),
            })
            setList(newList)
          }
        }}
      />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <input type="text" />
          </li>
        ))}
      </ul>
    </div>
  )
}
