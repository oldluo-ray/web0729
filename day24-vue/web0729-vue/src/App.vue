<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
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
import PubSub from 'pubsub-js'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
  mounted() {
    PubSub.subscribe('add', (msg, todoName) => {
      console.log(msg, todoName)
      this.list.push({
        id: Date.now(),
        isDone: false,
        todoName,
      })
    })

    PubSub.subscribe('del', (msg, id) => {
      console.log(msg)
      this.list = this.list.filter((item) => item.id !== id)
    })
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
