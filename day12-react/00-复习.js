/*

 props校验

    作用: 提示更加清晰的错误

    使用: 

        1. import PropTypes from 'prop-types' 
        2. 给组件添加静态属性
            组件.propTypes = {
                属性: PropTypes.数据类型.isRequired 
            }

 props默认值
    
    使用:

        组件.defaultProps = {
            属性: 默认值
        }


 表单控制

    受控组件

        表单项的值被状态控制了,这个表单项就叫做受控组件


    非受控组件

        直接操作dom

        1. 事件处理函数中通过e.target 
        2. 使用ref

        2.1 创建ref对象
        const xxxRef = React.craeteRef()
        2.2 绑定虚拟dom和ref对象
        <input type="text"  ref={xxxRef}/>
        2.3 获取真实dom
        xxxRef.current


*/
