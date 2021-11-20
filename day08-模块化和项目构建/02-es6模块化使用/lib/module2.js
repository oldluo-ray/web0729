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