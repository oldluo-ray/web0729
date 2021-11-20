<template>
  <div>
    <h2>test组件</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('test组件挂载成功了')
  },
}
</script>
<style scoped>
/* 添加了scoped,样式只对当前组件生效 */
div {
  background-color: red;
}
</style>
