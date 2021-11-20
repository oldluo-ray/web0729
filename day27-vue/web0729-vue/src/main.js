import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
