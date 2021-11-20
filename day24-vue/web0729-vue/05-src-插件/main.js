import Vue from 'vue'
import App from './App.vue'
// 让开发环境的提示文字隐藏
Vue.config.productionTip = false

// 引入插件
import plugins from './plugins'
Vue.use(plugins, 1, 2, 3)

// Vue.component('组件名', 组件)
// Vue.filter('过滤器名', () => {})
// Vue.directive('指令名', () => {})
// Vue.mixin(混入对象)

// 只要是添加到Vue原型上的成员,所有的组件和vue实例都可以访问
// Vue.prototype.xxx = '123'
// Vue.prototype.yyy = function () {
//   console.log('原型的方法----')
// }
new Vue({
  render: (h) => h(App),
}).$mount('#app')
