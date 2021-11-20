<template>
  <div>
    <h1>test组件</h1>
    <hr />
    <slot :list="list" a="123" :arr="arr"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      arr: ['hj', 'lj', 'jj'],
    }
  },
}
</script>

<style></style>
