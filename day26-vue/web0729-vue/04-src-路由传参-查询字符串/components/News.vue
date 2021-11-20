<template>
  <div>
    <h2>news组件</h2>
    <hr />
    <!-- <router-link to="/home/news/detail?name=zs&age=18">detail</router-link> -->
    <router-link
      :to="{
        // name: 'detail',
        path: '/home/news/detail',
        query: {
          name: 'zs',
          age: 20,
        },
      }"
      >detail</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
