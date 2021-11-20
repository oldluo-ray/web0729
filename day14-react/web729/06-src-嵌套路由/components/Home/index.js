import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Item1 from '../Item1'
import Item2 from '../Item2'
import Item3 from '../Item3'
import './index.css'
export default function Home(props) {
  return (
    <div className="wrap">
      <h1>home组件</h1>

      <NavLink to="/home/item1">item1</NavLink>
      <NavLink to="/home/item2">item2</NavLink>
      <NavLink to="/home/item3">item3</NavLink>

      {/* <Item1></Item1>
      <Item2></Item2>
      <Item3></Item3> */}
      <Route path="/home/item1" component={Item1}></Route>
      <Route path="/home/item2" component={Item2}></Route>
      <Route path="/home/item3" component={Item3}></Route>
    </div>
  )
}
