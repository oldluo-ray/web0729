//创建store对象
// 引入vuex
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

// 创建store对象,并导出
export default new vuex.Store({
  actions: {
    add({ commit }, value) {
      setTimeout(() => {
        commit('jia', value)
      }, 1000)
    },
  },
  mutations: {
    jia(state, value) {
      //   console.log(state, value)
      state.count += value
    },
  },
  state: {
    count: 0,
  },
  getters: {
    // getters的触发时机: 1. 初始化时 2. 依赖的数据发生变化时
    bigCount(state) {
      console.log('getters触发了', state)
      return state.count * 10
    },
  },
})
