<template>
  <div>
    <h1>demo组件</h1>
    <div>{{ count }}</div>
    <div>{{ big }}</div>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
import { hunru } from '../mixin'
export default {
  mixins: [hunru],
  // 注意: 如果自己的data和混入的data冲突,自己的data优先
  data() {
    return {
      count: 9,
    }
  },
  //   方法和混入的冲突了，自己的优先
  methods: {
    handle() {
      this.count = this.count + 3
      //   console.log('自己的handle')
    },
  },
  // 监视冲突,两个都执行,先执行混入的,后执行自己的
  //   watch: {
  //     count(newValue) {
  //     //   console.log(newValue, '自己的')
  //     },
  //   },
  // 计算属性冲突,以自己的优先
  computed: {
    big() {
      return this.count * 100
    },
  },
  // 如果冲突了,先执行混入的,后执行自己的
  mounted() {
    console.log('自己的')
  },
}
</script>

<style></style>
