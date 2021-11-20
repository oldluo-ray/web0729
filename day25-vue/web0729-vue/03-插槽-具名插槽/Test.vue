<template>
  <div>
    <h1>test组件</h1>
    <hr />
    <hr />
    <!-- 具名插槽 -->
    <slot name="tip"></slot>
    <hr />
    <slot name="content"></slot>

    <hr />
    <slot name="some"></slot>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
