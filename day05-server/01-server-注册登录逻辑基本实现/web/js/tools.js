// 将用户名和密码验证的函数,封装成一个
function handle(msg) {
  return function () {
    // 3. 获取用户输入的内容
    const value = this.value.trim()
    // 4.判断用户输入是否符合规范
    //规则: 只写字母和数字
    if (/^[A-z0-9]{6,8}$/.test(value)) {
      // 提示用户可以使用
      this.nextElementSibling.innerText = msg + '可用'
      this.nextElementSibling.style.color = 'green'
    } else {
      // 提示用户不可以使用
      this.nextElementSibling.innerText = msg + '不可用'
      this.nextElementSibling.style.color = 'red'
    }
  }
}
