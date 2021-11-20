/*

    redux-thunk的使用

        redux中无法实现异步操作
        为了可以在redux中实现异步操作. 要使用中间件 redux-thunk


        1. 下载 npm i redux-thunk 
        2. 在store.js中, 引入redux-thunk.
         import thunk from 'redux-thunk' 
        3. 在store.js中,从redux中引入applyMiddleWare
         import {createStore, applyMiddleWare} from 'redux'
        4. 在createStore在reducer函数后面,使用applyMiddleWare(中间件)
         createStore(reducer, applyMiddleWare(thunk))
        5. 在actions.js中定义异步action,将异步操作写在异步action中
            function xxxAsync(){
                return (dispatch) => {
                    //执行异步操作

                    //异步成功之后,指向函数
                    dispatch(同步action)
                }
            }
        6. 在容器组件中,将异步action传入到展示组件中
        7. 在展示组件中使用异步action



      
   
*/
