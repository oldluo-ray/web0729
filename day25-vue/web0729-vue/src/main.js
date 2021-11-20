import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 使用vuex

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 配置vuex的store
  store,
}).$mount('#app')
