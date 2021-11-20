/*

    es6模块化的使用:

        1. module1.js 需要使用统一导出的方式,导出数组,函数. 在入口文件要引入
            module1.js 
                const arr = [1,2,3]
                function fn(){}
                export {arr, fn}

            index.js 
                import {arr, fn} from './module1'

        2. module2.js 需要使用分别的方式,导出数组,函数. 在入口文件要引入
             module2.js
                export const arr = [1,2,3]
                export  function fn(){}
            index.js 
                import {arr as arr1, fn as fn1} from './module2'

       3.  module3.js 需要使用默认的方式,导出对象. 在入口文件要引入
                

              export default {name: 'zs'}

              import obj from './module3'
            
        4.  module4.js 需要使用默认的方式和统一的方式,导出对象,数组和函数. 在入口文件要引入
               默认: {name: 'zs'}, 统一的方式: 数组和函数

              export default {name: 'zs'}
              const arr = [1,2,3]
              function fn(){}
              export {arr,fn}

              imoprt obj2, {arr as arr2, fn as fn2} from './module4.js'

    webpack的五大核心概念是什么:

         入口
             定义了入口文件的路径
         出口
             定义了项目打包之后的存放的位置
         加载器
            webpack本身只能操作js(将es6模块化语法转成浏览器认识的)和json.无法处理其他文件.所以要使用加载器
         插件
            加载器都处理不了的文件,用插件处理

         模式
            定义当前webpack的工作环境

            production 生产  会压缩js
            development 开发  不会压缩





*/
