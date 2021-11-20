<template>
  <!-- 用于定义结构: template中至少需要一个根标签 -->
  <div>
    <h1>app组件</h1>
    <Test></Test>
    <Demo></Demo>
  </div>
</template>
<script>
// 写定义组件的代码
import Test from './components/Test'
import Demo from './components/Demo'
export default {
  components: {
    Test,
    Demo,
  },
}
</script>
<style></style>
