/*

  1. 前端路由原理: 

      路径变化,不发送请求.根据当前路径展示所对应的视图

  2. react-router-dom


      1. 下载

      2. 引入组件

      BrowserRouter
        包裹整个应用, 监听路径的变化

      Route 

        1. Route写在哪里,所管理的组件就渲染到哪里
        2. 用来定义前端路由规则

      Link
         相当于a标签,点击修改路径,但是不发送请求

  3. 其他组件
  
      Switch

          1. 可以包裹Route, 不包裹Route,所有的Route都会参与匹配. 包裹之后,前面的匹配成功,后面不再进行匹配

          2. 也可以包裹Redirect. 包裹了之后,from属性才会生效.否则from无效 

      Redirect

          重定向 
          from to

      NavLink

        功能和Link基本一致,但是NavLink会自动添加类名,实现高亮
        自定义类名: activeClassName


    4. 匹配规则: 

          模糊匹配(默认方式): pathname要以path开头, 以/分段比较

          精确匹配: pathname要和path一致

          开启方式: 在Route上添加exact属性.不写exact的还是模糊匹配

      
    5. 编程式导航


      history
        修改路径
        push('/目标路径',数据) 添加一条历史记录
        replace('/目标路径',数据) 替换一条历史记录

      location
        获取push/replace的第二个参数
        state

      match
        获取路由参数
        params
        定义路由参数
        <Route path="/路径/:参数?"></Route>
        传递路由参数
        push/replace 
        Link/NavLink 
        直接地址栏输入


    6. 被Route管理的组件,可以获取到history/location/match对象. 通过props获取

    7. 如果一个组件,没有被Route管理,但是也想要获取history.应该如何处理?
        withRouter的使用: 


        import {withRouter} from 'react-router-dom'
        const withApp = withRouter(App)
        export default withApp

    8 . 嵌套路由: 

        有一个一级路由路径是/test.想要写一个二级路由路径是/a.
        那么关于这个二级路由,路由规则如何定义


        <Route path="/test/a"></Route>


   
*/
