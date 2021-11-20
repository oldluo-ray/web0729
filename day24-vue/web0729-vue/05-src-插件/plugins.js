export default {
  // install的执行时机: Vue.use()
  install(Vue, ...args) {
    console.log('install被调用了', args)
    // 全局的配置,都直接在这里配置
    Vue.filter('slice', (val) => {
      return val.slice(0, 2)
    })

    Vue.mixin({
      data() {
        return {
          msg: 'hello',
        }
      },
    })

    Vue.prototype.xxx = 'hello plugin'
  },
}
