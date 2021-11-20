<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model.trim="username"
      />&nbsp;
      <button @click="handle">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    handle() {
      if (!this.username) return
      this.$bus.$emit('username', this.username)
      this.username = ''
    },
  },
}
</script>
