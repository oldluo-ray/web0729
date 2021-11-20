import Vue from 'vue'
import App from './App.vue'
// import { hunru } from './mixin'
// 让开发环境的提示文字隐藏
Vue.config.productionTip = false

// 全局混入mixin
// Vue.mixin(hunru)
new Vue({
  // render是一个渲染函数
  // 这个渲染函数接收到的是一个createElement的函数,但是一般接收时使用h简化
  // render渲染函数的返回值是什么就将什么渲染到页面上
  // 现在的代码,表示render函数的返回值就是createElemnet的返回值
  // 将App根组件渲染到根标签里面(#app里面)
  render: (h) => h(App),
  // mounted() {
  //   console.log('vue实例自己的')
  // },
}).$mount('#app')
