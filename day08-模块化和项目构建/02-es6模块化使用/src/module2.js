// 分别导出
// 注意:
// 1. 分别导出时,后面写的必须是声明语句,绝对不能直接写一个值或变量
// 2. 分别导出时,声明语句中必须包含名字
export const arr = ['a', 'b', 'c']
export function fn() {
  console.log('module2的fn函数')
}

export let msg = 123
