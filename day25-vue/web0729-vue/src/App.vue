<template>
  <div>
    <h1>vuex的基本使用</h1>
    <div>{{ $store.state.count }}</div>
    <button @click="handle">按钮-异步</button>
    <button @click="handle1">按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      // console.log(this.$store)
      //为了触发actions
      this.$store.dispatch('add', 2)
    },
    handle1() {
      // console.log(this.$store)
      //为了触发actions
      this.$store.commit('jia', 2)
    },
  },
}
</script>

<style></style>
