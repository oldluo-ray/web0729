<template>
  <div>
    <h2>count组件</h2>
    <div>{{ $store.state.xxx.count }}</div>
    <h3>{{ count }}</h3>
    <div>{{ $store.getters['xxx/bigCount'] }}</div>
    <h3>{{ bigCount }}</h3>
    <button @click="jia(1)">+</button>
    <button @click="add(2)">async+</button>
    <button @click="oddAdd(3)">odd+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  //   name: 'xxx', // name的值决定了vue调试工具中组件的展示名字
  computed: {
    ...mapState('xxx', ['count']),
    ...mapGetters('xxx', ['bigCount']),
  },
  methods: {
    ...mapActions('xxx', ['add', 'oddAdd']),
    ...mapMutations('xxx', ['jia']),
  },
}
</script>

<style>
h3 {
  color: red;
}
</style>
