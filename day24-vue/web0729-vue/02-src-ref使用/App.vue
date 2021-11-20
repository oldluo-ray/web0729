<template>
  <!-- 用于定义结构: template中至少需要一个根标签 -->
  <div>
    <h1 ref="xxx">app组件</h1>
    <Test ref="yyy"></Test>
  </div>
</template>
<script>
// 写定义组件的代码
import Test from './components/Test'
export default {
  components: {
    Test,
  },
  mounted() {
    console.log(this.$refs)
  },
}
</script>
<style></style>
