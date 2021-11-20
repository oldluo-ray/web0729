<template>
  <div>
    <h1>vue中发送异步请求</h1>
    <button @click="handle">按钮</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async handle() {
      // const result = await axios({
      //   url: 'https://api.github.com/search/users',
      //   method: 'get',
      //   params: {
      //     q: '123',
      //   },
      // })
      // console.log(result)

      // let result = await fetch('https://api.github.com/search/users?q=123', {
      //   method: 'get',
      // })
      // result = await result.json()
      // console.log(result)
    },
  },
}
</script>

<style></style>
