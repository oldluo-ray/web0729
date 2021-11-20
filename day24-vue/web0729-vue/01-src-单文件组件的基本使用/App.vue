<template>
  <!-- 用于定义结构: template中至少需要一个根标签 -->
  <div>
    <h1>app跟组件</h1>
    <div>{{ count }}</div>
    <button @click="handle">按钮</button>
    <hr />
    <test></test>
  </div>
</template>
<script>
import Vue from 'vue'
import test from './components/Test'
// 写定义组件的代码
export default Vue.extend({
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handle() {
      this.count = this.count + 1
    },
  },
  components: {
    test: test,
  },
})
</script>
<style>
div {
  background-color: pink;
}
</style>
