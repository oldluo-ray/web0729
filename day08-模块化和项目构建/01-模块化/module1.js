// lw

// let arr =

// let obj = {
//   arr: [1, 2, 3],
//   msg: '呵呵呵',
//   num: 9,
// }

;(function () {
  let arr = [1, 2, 3]
  let msg = 'hehehe'
  // 如果定义一个局部作用域,就可以定义一些私有的数据
  let money = '0.5'
  function queryMoney() {
    return money
  }

  window.module1 = {
    arr,
    msg,
    queryMoney,
  }
})()
