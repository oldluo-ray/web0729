<template>
  <div>
    <h2>test组件</h2>
    <div>{{ $store.state.yyy.msg }}</div>
    <button @click="$store.commit('setMsg', 'yyds')">修改msg</button>
  </div>
</template>

<script>
export default {
  //   name: 'yyy',
}
</script>

<style></style>
