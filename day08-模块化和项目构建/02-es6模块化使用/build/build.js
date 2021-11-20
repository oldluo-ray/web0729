(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function fn() {
  console.log('module1的fn函数调用了');
}

var arr = [1, 2, 3];

var msg = '哈哈哈';

// 统一导出:

exports.fn = fn;
exports.arr = arr;
exports.msg = msg;
// 可以写多次
// export { fn }
// export { arr }
// export { msg }
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn = fn;
// 分别导出
// 注意:
// 1. 分别导出时,后面写的必须是声明语句,绝对不能直接写一个值或变量
// 2. 分别导出时,声明语句中必须包含名字
var arr = exports.arr = ['a', 'b', 'c'];
function fn() {
  console.log('module2的fn函数');
}

var msg = exports.msg = 123;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fn;
// 默认导出
// export default 值
// 默认导出只能导出一个
function fn() {
  console.log('module3模块的fn函数');
}
// export default [7,8,9]
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dbj = exports.dbj = '红浪漫';
var obj1 = { name: 'hj', info: 'lsp' };
exports.obj1 = obj1;


var bol = true;
exports.default = bol;
},{}]},{},[1]);
