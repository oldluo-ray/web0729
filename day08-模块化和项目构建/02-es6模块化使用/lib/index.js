'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 导入默认导出的模块
// 注意: 导入时,可以随意定义一个变量名
// 如果统一导出时使用的变量名是fn,那么导入时,变量名也必须叫fn
// 注意: 不需要关心顺序
console.log(_module6.default);

// 导入一个使用了多种导出方式的模块
// import 默认导出, {分别导出和统一导出} from '模块路径'
// 注意: 默认导出的要写在前面


// 导入分别导出的模块
// 导入时,名字要求和导出时一样,而且也不关心顺序
// 如果导入时,变量名和其他变量名冲突,可以利用as重新命名,重新命名后要使用新的名字

console.log(_module5.dbj);
console.log(_module5.obj1);

// fn()
// console.log(arr)
// fn2()
// console.log(arr2)
// console.log(msg)
// // const {} = 值
// xxx()