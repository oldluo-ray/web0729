// 封装一些函数,返回action对象
// 这些函数有一个统一的名字: actionCreator
import { ADD, SUB } from './constants'
export function addFn(num) {
  return { type: ADD, num }
}
export function subFn(num) {
  return { type: SUB, num }
}
