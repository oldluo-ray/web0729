<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给组件添加自定义的事件 
      
        原生的click事件, 需要用户点击(用户操作)
        原生的blur事件, 需要用户点击其他位置(用户操作)

        想要触发自定义事件,需要执行一段代码触发
      -->
      <Header @add="add"></Header>
      <!-- 里面的template类似于react中的Fragment -->
      <template v-if="list.length">
        <List :list="list"></List>
        <Footer
          :list="list"
          :allCheckHandle="allCheckHandle"
          :clearDoneHandle="clearDoneHandle"
        ></Footer>
      </template>
      <h1 v-else>恭喜您,没有任务</h1>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
  mounted() {
    // app需要接收数据,所以在app挂载成功之后,给vue实例绑定自定义事件
    this.$bus.$on('del', this.del)
  },
  data() {
    return {
      list: [
        {
          id: 1,
          isDone: true,
          todoName: '吃饭',
        },
        {
          id: 2,
          isDone: false,
          todoName: '抽烟',
        },
      ],
    }
  },
  methods: {
    add(todoName) {
      this.list.push({
        id: Date.now(),
        isDone: false,
        todoName,
      })
    },
    del(id) {
      this.list = this.list.filter((item) => item.id !== id)
    },
    allCheckHandle() {
      // console.log('app的函数执行了')
      //判断之前的数据是否都选中
      const result = this.list.every((item) => item.isDone)

      this.list.forEach((item) => (item.isDone = !result))
    },
    clearDoneHandle() {
      this.list = this.list.filter((item) => !item.isDone)
    },
  },

  components: {
    Header,
    List,
    Footer,
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
