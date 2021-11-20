/*

  高阶组件

    function(要使用状态和逻辑的组件){
      return class extends Component{
          render(){
            return <要使用状态的组件 >
          }
      }
    }


  renderprops

      class Xxx extends Component{

        数据和逻辑

        render(){
           return this.props.render(数据)
        }

      } 



      <Xxx render={(接收数据)=>{return 组件}}></Xxx>
      <Xxx >{(接收数据)=>{return 组件}}</Xxx>


  hooks

      import {useState, useEffect} from 'react'

      const [数据, 设置数据的函数] = useState(默认值) 

      需求: 要模拟挂载和卸载.并且当父组件传入的props.count发生变化的时候,还要模拟更新

      function Test(props){
         useEffect(()=>{
          return ()=>{

          }
        }, [props.count])
      }


      hooks的规则: 

        1. 只能函数组件还有其他hooks中使用
        2. 使用hooks的时候,要处于顶级作用域


      自定义hook: 
        就是自定义函数,但是函数名以use开头

      

      

*/
