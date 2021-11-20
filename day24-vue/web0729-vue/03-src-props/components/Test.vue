<template>
  <div>
    <h1>test组件</h1>
    <div>{{ xxx }}</div>
    <div>{{ yyy }}</div>
    <div>{{ zzz }}</div>
    <button @click="zzz = zzz + 1">按钮</button>
  </div>
</template>

<script>
export default {
  // 配置props.父组件传递的数据,可以直接添加到当前组件的实例上
  props: ['xxx', 'yyy', 'zzz'],
  // props校验(简单)
  //   props: {
  //     xxx: String,
  //     yyy: String,
  //     zzz: String,
  //   },
  // props校验(复杂)
  //   props: {
  //     xxx: {
  //       type: String,
  //       required: true,
  //     },
  //     yyy: {
  //       type: String,
  //       default: '呵呵呵',
  //     },
  //     zzz: {
  //       type: Number,
  //       required: true,
  //     },
  //   },
}
</script>

<style></style>
