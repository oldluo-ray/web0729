//创建store对象
// 引入vuex
import Vue from 'vue'
import vuex from 'vuex'
import count from './vuex/count'
import test from './vuex/test'
Vue.use(vuex)

// 创建store对象,并导出
export default new vuex.Store({
  modules: {
    // 键: module对象
    xxx: count,
    yyy: test,
  },
})
