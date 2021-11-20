<template>
  <div>
    <h1>home组件</h1>
    <hr />
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'xxx',
  mounted() {
    console.log('home挂载了')
  },
  beforeDestroy() {
    console.log('home即将卸载了')
  },
  // 由于home没有缓存,所以失活和激活的钩子也不会触发
  activated() {
    console.log('home激活了')
  },
  deactivated() {
    console.log('home失活了')
  },
}
</script>

<style></style>
