<template>
  <div>
    <h2>message组件</h2>
  </div>
</template>

<script>
export default {
  // 组件内路由守卫
  // 进入到这个当前组件之前
  beforeRouteEnter(to, from, next) {
    console.log('enter', to, from)
    next()
  },
  // 离开当前组件之前
  beforeRouteLeave(to, from, next) {
    console.log('leave', to, from)
    next()
  },
}
</script>

<style></style>
