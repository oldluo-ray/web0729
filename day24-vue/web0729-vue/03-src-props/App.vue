<template>
  <!-- 用于定义结构: template中至少需要一个根标签 -->
  <div>
    <h1>app组件</h1>
    <Test xxx="abc" :zzz="count"></Test>
  </div>
</template>
<script>
// 写定义组件的代码
import Test from './components/Test'
export default {
  data() {
    return {
      count: 0,
    }
  },
  components: {
    Test,
  },
  mounted() {},
}
</script>
<style></style>
