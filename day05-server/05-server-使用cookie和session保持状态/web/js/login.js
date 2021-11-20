// 需求: 用户输入,表单项后面提示文本,当前输入的内容是否符合要求
// 1. 获取元素
const username = document.querySelector('input[name=username]')
const password = document.querySelector('input[name=password]')
const repassword = document.querySelector('.repassword')
const btn = document.getElementsByTagName('button')[0]
// 2. 注册input事件 ,只要只要用户输入就会触发
username.oninput = handle('用户名')

password.oninput = handle('密码')

repassword && (repassword.onblur = function () {
    // 判断密码和确认密码的值是否相同,如果相同就通过校验,如果不相同,就不通过校验,并且提示用户
    const rePassword = this.value.trim()
    const psw = password.value.trim()
    if (rePassword === psw) {
      // 提示用户通过
      this.nextElementSibling.innerText = '与密码一致'
      this.nextElementSibling.style.color = 'green'
    } else {
      // 提示用户不通过
      this.nextElementSibling.innerText = '与密码不一致'
      this.nextElementSibling.style.color = 'red'
    }
  })

// 给btn注册点击事件
btn.onclick = function (e) {
  // 什么情况下不能把表单的信息,发送给服务器
  // 只要有一个表单校验不通过(后面span的字体颜色不是绿色),就不发送请求

  // 判断条件: 获取所有的span.然后要查看每一个span的行内样式color是否是绿色,有一个不是就执行阻止默认行为
  let spans = document.getElementsByTagName('span')
  // // spans是一个伪数组,不能使用数据的遍历方法
  spans = Array.from(spans)
  // // console.log(spans)
  // // every和some返回布尔值

  const result = spans.some((item) => {
    return item.style.color !== 'green'
  })

  if (result) {
    e.preventDefault()
  }

  // console.log(spans[0].style.color) // 只能获取行内样式 返回值:green
  // console.log(getComputedStyle(spans[0]).color) //可以获取作用到元素上所有的样式 返回值:rgb(0, 128, 0)
}
