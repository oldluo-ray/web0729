import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './config/routes'
import Loading from './components/Loaidng'

import './App.css'
export default function App() {
  return (
    // 注意: 当使用了React.lazy懒加载组件之后,一定要写Suspense配合展示加载过程中的ui
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div>
          {routes.map((item, index) => (
            <Route
              exact={item.exact}
              key={index}
              path={item.path}
              // component={item.component}
              render={(props) => {
                // console.log(props)
                return <item.component>{item.children}</item.component>
              }}
            ></Route>
          ))}
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
