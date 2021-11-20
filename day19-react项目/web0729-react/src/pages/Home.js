import React from 'react'
import { Link, Route } from 'react-router-dom'
console.log('home加载了');
export default function Home(props) {
  console.log(props)
  return (
    <div>
      <h1>home</h1>
      {props.children && (
        <>
          <Link to="/home/test">test</Link>
          <Link to="/home/demo">demo</Link>
        </>
      )}
      <hr />
      {props.children &&
        props.children.map((item, index) => (
          <Route
            path={item.path}
            exact={item.exact}
            key={index}
            render={(props) => {
              return <item.component>{item.children}</item.component>
            }}
          ></Route>
        ))}
    </div>
  )
}
