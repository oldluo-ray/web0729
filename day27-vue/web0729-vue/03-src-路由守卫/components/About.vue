<template>
  <div>
    <h1>about组件</h1>
    <input type="text" />
    <button @click="handle1">push</button>
    <button @click="handle2">replace</button>
  </div>
</template>

<script>
export default {
  name: 'yyy',
  mounted() {
    console.log('about挂载了')
  },
  beforeDestroy() {
    console.log('about即将卸载了')
  },

  activated() {
    console.log('about激活了')
  },
  deactivated() {
    console.log('about失活了')
  },
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
