import React from 'react'

// 写一个根组件
export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    isAgree: false,
    city: 'sz',
    hobby: [],
    sex: '',
  }

  handle = (name) => (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    // console.log(value)
    this.setState({
      [name]: value,
    })
  }

  /*
    handle=(a,b,c)=>{

    }
    函数柯里化
    handle = (a)=> (b)=>(c) {
      
    }
  
  
  
  */

  cbHandle = (e) => {
    // console.log(e.target.value)
    const value = e.target.value
    // 先判断hobby中是否存在这个值,
    const index = this.state.hobby.indexOf(value)
    console.log(index)
    // 如果有,则删除,没有则添加
    if (index >= 0) {
      //存在,删除
      this.state.hobby.splice(index, 1)
    } else {
      // 不存在,添加
      // 数组添加了,但是没有真正的存储起来
      this.state.hobby.push(value)
    }
    this.setState({
      hobby: this.state.hobby,
    })
  }

  radioHandle = (e) => {
    const value = e.target.value
    this.setState({
      sex: value,
    })
  }
  render() {
    return (
      <div id="app">
        用户名:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handle('username')}
        />
        <br />
        密码:
        <input
          type="password"
          value={this.state.password}
          onChange={this.handle('password')}
        />
        <br />
        用户隐私政策:
        <input
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.handle('isAgree')}
        />
        <br />
        选择城市:
        <select
          name=""
          id=""
          value={this.state.city}
          onChange={this.handle('city')}
        >
          <option value="bj">北京</option>
          <option value="sh">上海</option>
          <option value="sz">深圳</option>
        </select>
        <br />
        {/* 其他情况 
        // 一个复选框: 最终是为了拿到一个复选框的选中或未选中的状态
        // 多个复选框
         需要将复选框的value值,存储到状态中


        // 单选框
        
        */}
        爱好: 抽烟:
        <input type="checkbox" value="smoking" onChange={this.cbHandle} />
        喝酒:
        <input type="checkbox" value="drinking" onChange={this.cbHandle} />
        找富婆:
        <input type="checkbox" value="findMoney" onChange={this.cbHandle} />
        <br />
        性别: 男:{' '}
        <input
          type="radio"
          name="sex"
          value="male"
          onChange={this.radioHandle}
        />
        女:{' '}
        <input
          type="radio"
          name="sex"
          value="female"
          onChange={this.radioHandle}
        />
        X:{' '}
        <input type="radio" name="sex" value="x" onChange={this.radioHandle} />
      </div>
    )
  }
}
