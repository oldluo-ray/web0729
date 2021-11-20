import Vue from 'vue'
import App from './App.vue'
// 配置路由
import vueRouter from 'vue-router'
//引入路由表
import routes from './routes'

// 不展示生产环境相关的提示信息
Vue.config.productionTip = false
Vue.use(vueRouter)

new Vue({
  render: (h) => h(App),
  // router属性配置路由表
  router: routes,
}).$mount('#app')
