function fn() {
  console.log('module1的fn函数调用了')
}

let arr = [1, 2, 3]

let msg = '哈哈哈'

// 统一导出:

export { fn, arr, msg }
// 可以写多次
// export { fn }
// export { arr }
// export { msg }
