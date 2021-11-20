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

    oddAdd({ commit, state }, value) {
      // 当前count的值是奇数,才可以正常加,否则不加
      if (state.count % 2 === 0) return
      commit('jia', value)
    },
  },
  mutations: {
    jia(state, value) {
      state.count += value
    },

    setMsg(state, value) {
      state.msg = value
    },
  },
  state: {
    count: 0,
    msg: 'hello sa',
  },
  getters: {
    // getters的触发时机: 1. 初始化时 2. 依赖的数据发生变化时
    bigCount(state) {
      console.log('getters触发了', state)
      return state.count * 10
    },
  },
})
