<template>
  <div>
    <!-- 作用域插槽: 将Test组件中的数据,传递到Test组件子节点的位置上 -->
    <Test>
      <!-- 注意: 要使用Test组件内部传到子节点的数据,要使用template包裹结构. 然后template要定义一个属性scope,值就是一个对象,里面存储了传过来的数据,名字随便定义 -->
      <!-- { "list": [ "a", "b", "c" ], "a": "123" } -->
      <template scope="xxx">
        <div>{{ xxx }}</div>
        <ul>
          <li v-for="(item, index) in xxx.list" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Test>

    <Test>
      <template scope="obj">
        <div>{{ obj }}</div>
        <ul>
          <li v-for="(item, index) in obj.arr" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Test>
  </div>
</template>

<script>
import Test from './Test.vue'
export default {
  components: {
    Test,
  },
}
</script>

<style></style>
