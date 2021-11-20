<template>
  <div>
    <div>vue配置代理,解决跨域</div>
    <button @click="handle1">按钮5000</button>
    <button @click="handle2">按钮5001</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async handle1() {
      const result = await axios({
        // 注意:如果要使用代理,就不要写完整的url地址
        url: '/xxx/test',
      })
      console.log(result)
    },
    async handle2() {
      const result = await axios({
        // 注意:如果要使用代理,就不要写完整的url地址
        url: '/yyy/test',
      })
      console.log(result)
    },
  },
}
</script>

<style></style>
