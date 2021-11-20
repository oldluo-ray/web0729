/*

  组件的生命周期


     挂载

        constructor

        render

        componentDidMount

     更新

        render
        componentDidUpdate

     卸载

        componentWillUnmount



  组件通讯


      props 

        只能父传子
        react技术


      context

        也是从上往下传递数据, 但是可以跨级
        react技术


        const context = React.createContext(默认值)

        传递:  context.Provider 包裹整个结构

        接收:   <context.Consumer>{data=>jsx}</context.Consumer>
                static contextType = context对象
                this.context 获取值


      pubsub-js

        任何的组件都可以互相传递
        第三方的js库

        1. 引入pubsub 
        import PubSub from 'pubsub-js'

        2. 订阅
        this.token = PubSub.subscribe('话题',(msg, data)=>{
          
            this.setState({
              xxx: data
            })
        })

        3. 发布

          PubSub.publish('话题', 数据)


        4. 取消订阅
        PubSub.unsubscribe(token)





  性能优化

        1. 减轻state 要渲染到页面上的数据,存储到state. 不渲染的数据,不要存储到state中
        2. shouldComponentUpdate

          2.1 在更新阶段执行
          2.2 在render函数之前  
          2.3 参数: nextProps(最新的props), nextState(最新的state)   返回: 
            布尔值  返回true则更新组件  false则不更新


        3. PureComponent 

         和Component一样,要被一个类组件继承 

         PureComponent和Component的区别: 

          PureComponent内部自动实现了shouldComponentUpdate. 判断了所有的
          props和state

         纯组件的缺点: 比较数据是浅层对比. 注意: 不要直接修改数据,根据旧的数据,创建新的数据




*/
