<template>
  <div>
    <!-- 修改地址栏,但是不发送请求 
    router-link默认是push一条历史记录,如果添加了replace属性,就是替换历史记录
    router-link默认给选中的a标签添加类名router-link-active. 通过active-class可以将高亮的类名改为自定义的类名
    -->
    <router-link replace to="/home" active-class="active">home</router-link>
    <router-link replace to="/about">about</router-link>

    <!-- router-view写在哪里,那对应的要展示的组件就渲染到哪里 -->
    <!-- 默认情况下: 组件切换了,组件就会卸载.但是如果使用keep-alive包裹router-view.则要渲染在这个router-view位置上的所有组件都会被缓存.就不会卸载了 -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- 只控制router-view位置要渲染的众多组件中的一个 
      include的值是要缓存的组件的名称
    -->
    <keep-alive include="yyy">
      <router-view></router-view>
    </keep-alive>

    <!-- 控制多个组件 -->
    <!-- <keep-alive :include="['yyy', 'xxx']">
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
export default {}
</script>

<style></style>
