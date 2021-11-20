// 注意: 导入时,如果是第三方模块,直接写模块名, 如果是自定义模块,要写模块路径
// 如果统一导出时使用的变量名是fn,那么导入时,变量名也必须叫fn
// 注意: 不需要关心顺序
import { arr, fn } from './module1'

// 导入分别导出的模块
// 导入时,名字要求和导出时一样,而且也不关心顺序
// 如果导入时,变量名和其他变量名冲突,可以利用as重新命名,重新命名后要使用新的名字
import { arr as arr2, fn as fn2, msg } from './module2'

// 导入默认导出的模块
// 注意: 导入时,可以随意定义一个变量名
import xxx from './module3'

// 导入一个使用了多种导出方式的模块
// import 默认导出, {分别导出和统一导出} from '模块路径'
// 注意: 默认导出的要写在前面
import yyy, { dbj, obj1 } from './module4'

console.log(yyy)
console.log(dbj)
console.log(obj1)

// fn()
// console.log(arr)
// fn2()
// console.log(arr2)
// console.log(msg)
// // const {} = 值
// xxx()
