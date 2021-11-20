<template>
  <div class="row">
    <h1>{{ tip }}</h1>
    <!-- 展示用户列表 -->
    <!-- 注意: template无法使用v-show -->
    <template v-if="tip !== 'loading...'">
      <div class="card" v-for="item in list" :key="item.id">
        <a target="_blank" :href="item.html_url">
          <img :src="item.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ item.login }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data() {
    return {
      list: [],
      tip: 'welcome',
    }
  },
  mounted() {
    this.$bus.$on('username', this.handle)
  },
  methods: {
    async handle(username) {
      // console.log(username)
      //请求之前,要展示的是loading...
      this.tip = 'loading...'
      //发送请求
      try {
        const result = await axios({
          url: 'https://api.github.com/search/users',
          params: {
            q: username,
          },
        })

        // console.log(result)
        this.list = result.data.items
        this.tip = ''
      } catch (error) {
        this.tip = '网络错误,请稍后重试'
      }
    },
  },
}
</script>
<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
