import Vue from 'vue'
import App from './App.vue'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 作用: 让所有的组件,都可以通过$bus找到项目中的惟一的vue实例
    Vue.prototype.$bus = this
  },
}).$mount('#app')
