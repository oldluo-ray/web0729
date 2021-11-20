// 模仿jquery.ajax方法
function myAjax(option) {
  return new Promise((resovle, reject) => {
    // 判断传入的不是对象,则直接return
    if (typeof option !== 'object') return
    // 结构所需要的所有配置项,即便使用者没有传递对应的配置内容,解构时不会报错,只是对应的值是undefined
    let {
      url,
      type = 'get',
      data,
      timeout,
      dataType = 'json',
      // beforeSend,
      // success,
      // error,
      // complete,
    } = option

    // 判断,如果没有url,则不发送请求
    if (!url) return

    // 创建xhr
    const xhr = new XMLHttpRequest()

    // xhr.timeout 就是用来设置超时的.单位是毫秒
    timeout && (xhr.timeout = timeout)
    // 设置请求首行
    // 如果发送的是get请求,就需要将用户传入data这个对象里面的数据,拿出来拼接成一个键值对的字符串,然后拼接在url后面

    // '键=值&键=值'
    // params的值取决于传入的对象,如果对象有值,就是键值对字符串,如果没有值,就是空字符串
    let params = obj2str(data)

    if (type === 'get') {
      url += '?' + params
      params = null
    }

    xhr.open(type, url)

    // 设置请求头
    if (type === 'post') {
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }

    //发送请求之前调用
    // const result = beforeSend && beforeSend()
    // if (result === false) return

    // 设置请求主体并发送请求
    // 如果是post请求,send中要传入参数params,如果是get请求什么都不用写或写一个null
    xhr.send(params)

    // 响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // complete && complete()
        if (xhr.status === 200) {
          let result = xhr.responseText
          if (dataType === 'json') {
            result = JSON.parse(result)
          }
          resovle(result)
          // success && success(result)
        } else {
          // error && error()
          reject()
        }
      }
    }
  })
}

function obj2str(data) {
  // 简单判断data是否是对象
  // 注意: 由于字符串是不可变的,所以如果有大量的字符串拼接,尽量使用数组配合拼接,优点: 1. 方便 2. 节省内存
  if (typeof data !== 'object') return
  const arr = []
  for (let key in data) {
    arr.push(key + '=' + data[key])
  }
  return arr.join('&')
}
