<template>
  <div>
    <h2>news组件</h2>
    <hr />
    <router-link to="/home/news/detail/2/10?name=zs&age=30">detail</router-link>
    <button
      @click="
        $router.push({
          path: '/home/news/detail',
        })
      "
    >
      按钮
    </button>
    <!-- <router-link
      :to="{
        // name: 'detail',
        // 如果要使用path.则直接将路由参数,写在path后面
        path: '/home/news/detail/4/30',
        // 注意: params只能和name配置使用.不能和path配合使用
        // params: {
        //  page: 3,
        //  pageSize: 20,
        //},
      }"
      >detail</router-link
    > -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
