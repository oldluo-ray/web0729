<template>
  <div>
    <h1>app组件</h1>
    <hr />
    <Count></Count>
    <hr />
    <Test></Test>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Test from './components/Test.vue'
export default {
  components: {
    Count,
    Test,
  },
}
</script>

<style></style>
