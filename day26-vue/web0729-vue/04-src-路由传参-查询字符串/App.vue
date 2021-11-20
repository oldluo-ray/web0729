<template>
  <div>
    <!-- 修改地址栏,但是不发送请求 
    router-link默认是push一条历史记录,如果添加了replace属性,就是替换历史记录
    router-link默认给选中的a标签添加类名router-link-active. 通过active-class可以将高亮的类名改为自定义的类名
    -->
    <router-link replace to="/home" active-class="active">home</router-link>
    <router-link replace to="/about">about</router-link>

    <!-- router-view写在哪里,那对应的要展示的组件就渲染到哪里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
