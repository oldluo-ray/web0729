//定义并导出了一个module对象
export default {
  namespaced: true,
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
}
