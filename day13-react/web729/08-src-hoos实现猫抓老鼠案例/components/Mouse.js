import React, { Component } from 'react'
import useFn from '../position'
import MouseUrl from '../assets/mouse.gif'

export default function Mouse() {
  const { x, y } = useFn()
  // let { x, y } = this.props.state
  return (
    <div>
      <img
        src={MouseUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y, width: 100 }}
      />
    </div>
  )
}
