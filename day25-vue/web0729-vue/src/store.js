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
})
