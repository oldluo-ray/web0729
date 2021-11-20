<template>
  <div>
    <h3>detail</h3>
    <div>{{ $route.query.name }}</div>
    <div>{{ $route.params.page }}</div>

    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <div>{{ z }}</div>
    <div>{{ w }}</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: ['x', 'y', 'z', 'w', 'count'],
  mounted() {
    // 获取查询字符串
    // console.log(this.$route.query)
    // 获取路由参数
    console.log(this.$route.params)
  },
}
</script>

<style></style>
