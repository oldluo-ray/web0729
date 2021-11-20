/*

 react中组件的类型:

    函数组件(无状态)

        function Test(){
            return (jsx/null)
        }


    类组件(有状态)

        class Test extends React.Component{

            render(){
                return jsx/null
            }


        }


     使用: 
        <Test></Test>
        <Test />

    

 类组件中的state的使用

        定义状态: 
            constructor(){
                super()

                this.state = {
                    属性: 值
                }
            }
        
        获取: 
            
            this.state



        修改: 
            // setState的作用: 1. 修改state 2. 更新ui
            this.setState({
                属性: 值
            })


 组件中事件处理函数的this指向问题:

            原因: 因为我们定义的函数不是真正的事件处理函数.在底层是普通调用.
            this应该指向window,但是代码被babel编译过,所以开启了严格模式,最终指向了undefined

            1. 箭头函数   ()=>{this.handle()}

            2. this.handle = this.handle.bind(this)

            3. handle = () => {}

 组件的props:

        作用: 父组件给子组件传递数据
        
        传: 

            <Son 属性={值}></Son>

        接:

            类
                this.props

            函数

                props形参

            

     特点: 
            1. 可以传递任何类型的数据
            2. props是只读的



*/
