<template>
  <div>
    <h3>detail</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    // 获取查询字符串
    console.log(this.$route.query)
  },
}
</script>

<style></style>
