/*

  redux

    1. 下包

    2. 如何创建store对象
      import {createStore} from 'redux'
      const store = createStore(reducer函数)

    3. 如何定义reducer函数

      function reducer(state=初始值, action){
          switch(action.type){

              case 需求:
                
                return {
                    ...state,
                    属性: 值
                }

              default: 
                return state

          }
      }

    4. 利用store去获取数据,修改数据

        获取数据: store.getState()
        修改数据: store.dispatch(需求对象) 触发了reducer,从而修改数据



  react-redux


      需求: App根组件, 根组件中使用了一个Count组件. Count组件中要使用redux中的count的数据

      state = {
        count: 0
      }

      代码如何实现: 

        1. 在哪个文件中要引入什么?
           
        1.1 在App中要引入store
        1.2 要在App中引入Provider    import {Provider} from 'react-redux'
        1.3 使用Provider包裹整个app的结构
        <Provider store={store对象}>
          app的结构
        </Provider>

        2. 在容器组件中定义代码 WithCount.js

        2.1 引入connect import {connect} from 'react-redux'

        2.2 创建容器组件

           const mapState = (state) => {
              return {
                count: state.count
              }
           }

           const mapDispatch = (dispatch) => {

              return {
                  函数名(){
                    disaptch(action对象)
                  }
              }

           }
           const WithCount = connect(mapState)(Count)
           在App中使用的是WithCount


      
   
*/
