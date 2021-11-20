// 需求1: 获取任务列表中所有的数据, 然后渲染到页面中
// 一打开页面就发送请求
// 为了练习jsonp.获取所有数据,要使用jsonp的方式
function render(todos) {
  //   console.log(todos)
  let str = ''
  todos.forEach((item) => {
    str += `<li>
                <label>
                    <input type="checkbox" ${
                      item.isDone ? 'checked' : ''
                    }  data-id=${item._id} />
                    <span class="${item.isDone ? 'active' : ''}">${
      item.todoName
    }</span>
                </label>
                <button class="btn btn-danger" id=${item._id}>删除</button>
            </li>`
  })

  //动态的渲染底部

  //计算已经完成多少任务
  const doneTotal = todos.filter((item) => item.isDone).length
  // 计算总共有多少任务
  const allTotal = todos.length

  let str1 = `<div style="display: ${todos.length ? 'block' : 'none'}">
                 <label>
                <input type="checkbox" id="one" ${
                  doneTotal === allTotal ? 'checked' : ''
                } />
              </label>
              <span> <span>已完成${doneTotal}</span> / 全部${allTotal} </span>
              <button class="btn btn-danger">清除已完成任务</button></div>
              <h1 style="display: ${
                todos.length ? 'none' : 'block'
              }">恭喜您,毕业了!!</h1>
              `

  //   console.log(str)
  document.querySelector('.todo-main').innerHTML = str
  document.querySelector('.todo-footer').innerHTML = str1
}
const script = document.createElement('script')
script.src = 'http://127.0.0.1:5000/getTodos?callback=render'
document.body.appendChild(script)

// 需求2: 用户输入完毕,按下回车键,给服务器发送请求,添加任务
document.querySelector('.todo-header input').onkeyup = async function (e) {
  if (e.keyCode !== 13) return
  // 获取用户输入内容
  const value = this.value.trim()
  if (!value) return

  //
  const todos = await myAjax({
    url: 'http://127.0.0.1:5000/addTodo',
    type: 'post',
    data: {
      todoName: value,
    },
  })
  //   console.log(todos)
  // 清空文本框
  this.value = ''
  render(todos)
}

// 需求3: 修改任务状态
// 由于ul中的数据,是会动态增加的.所以最好使用事件委托给每一个input注册事件. 委托给离的最近的父级元素(ul)
document.querySelector('.todo-main').onchange = async function (e) {
  // this 事件源
  // e.target 事件目标
  const checked = e.target.checked
  //   console.log(checked)
  // 预设的属性,可以通过元素.属性名 直接获取值
  // 自定义的属性,不能通过元素.属性名获取值
  //   const id = e.target.id
  //   console.log(e.target.dataset)
  // 注意元素.dataset只能获取当前元素上一data-xxx形式定义的属性
  const id = e.target.dataset.id

  //   console.log(id)
  const result = await myAjax({
    url: 'http://127.0.0.1:5000/updateTodo',
    type: 'post',
    data: {
      id,
      checked,
    },
  })

  render(result)
}
// 需求4: 删除某一个任务
document.querySelector('.todo-main').onclick = async function (e) {
  //   console.log(e.target)
  //判断,如果是删除按钮,就执行后面的代码
  if (e.target.nodeName !== 'BUTTON') return
  //   console.log(e.target)
  const id = e.target.id
  //   console.log(id)
  const result = await myAjax({
    url: 'http://127.0.0.1:5000/deleteTodo',
    type: 'post',
    data: {
      id,
    },
  })
  render(result)
}

//需求5: 全选按钮的逻辑:
// 全选按钮变成true, 所有的任务的状态都变成true
// 全选按钮变成false, 所有的任务的状态都变成false
// 由于footer中的内容也是动态渲染的,所以需要事件委托给footer标签
document.querySelector('.todo-footer').onchange = async function (e) {
  // 获取当前全选的状态

  const checked = e.target.checked

  const result = await myAjax({
    url: 'http://127.0.0.1:5000/updataAllTodos',
    type: 'post',
    data: {
      checked,
    },
  })
  render(result)
}

document.querySelector('.todo-footer').onclick = async function (e) {
  // 获取当前全选的状态

  if (e.target.nodeName !== 'BUTTON') return

  const result = await myAjax({
    url: 'http://127.0.0.1:5000/deleteAllDoneTodos',
    type: 'post',
  })
  render(result)
}
