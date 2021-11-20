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