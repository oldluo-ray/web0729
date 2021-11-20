<template>
  <div>
    <h1>about组件</h1>
    <button @click="handle1">push</button>
    <button @click="handle2">replace</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle1() {
      this.$router.push({
        name: 'detail',
        query: {
          name: 'zs',
        },
        params: {
          page: 1,
        },
      })
    },
    handle2() {
      this.$router.replace({
        path: '/home/news/detail/9',
        query: {
          name: 'zs',
        },
      })
    },
  },
}
</script>

<style></style>
