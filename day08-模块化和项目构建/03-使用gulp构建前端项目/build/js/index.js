"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

var _module3 = require("./module3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _module["default"])();
console.log(1 === 2);
var _name = {
  name: 'zs'
},
    name = _name.name;
console.log(_module2.arr);
console.log(_module3.msg);