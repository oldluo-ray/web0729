/*

    react是什么

        一个用于构建用户界面的js库


    react使用需要引入的包

        react.js 
        react-dom.js 
        babel.js 


    react中命令式创建虚拟dom

        const div = React.createElement('标签名', {属性:值}, 子节点)

    react中声明创建虚拟dom
       div>p>span

        const div = (<div>
                <p>
                    <span></span>
                </p>
            </div>)


    react中将虚拟dom转成真实dom渲染到页面的方法

           ReactDOM.render(虚拟dom, 真实的dom对象) 


    jsx的使用

        1. jsx是语法糖 
        2. jsx注意点: 必须有且仅有一个根标签
        3. 插入数据,使用插值表达式
                写入的就是任何的js表达式
                可以写的位置: 1. 子节点的位置(将数据渲染到页面上) 2. 标签属性的值的位置(控制属性的值)

            注意: 
                子节点位置上,不能写什么 普通对象,函数,布尔值,undefined

        条件渲染

           <div>
            {条件 ? 标签1 : 标签2}
            {条件&&标签}
           </div>


        列表渲染

            数组,有多个元素,最终要将数组中的元素动态的渲染到页面上,每一个元素最终被一个li标签渲染

            const list = []

            list.map((item)=>{
                return <li key={唯一值}>{item.xxx}</li>
            })
        











*/
