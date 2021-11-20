<template>
  <div>
    <h1>vuex的基本使用</h1>
    <div>{{ $store.state.count }}</div>
    <h2>{{ xxx }}</h2>
    <div>{{ $store.getters.bigCount }}</div>
    <h2>{{ yyy }}</h2>
    <button @click="add(1)">按钮-异步</button>
    <button @click="jia(2)">按钮</button>
  </div>
</template>

<script>
// mapState是将vuex中state的数据,直接添加给当前组件的实例.这样在使用vuex数据的时候,就不用再调用$store了
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // 注意: 如果使用数组的写法.组件的计算属性的名字和vuex中state的名字是一样的
    // ...mapState(['count']),
    // 如果写成对象. 则键是什么就决定了组件的计算属性的名字是什么
    ...mapState({ xxx: 'count' }),
    // ...mapGetters(['bigCount']),
    ...mapGetters({ yyy: 'bigCount' }),
  },
  methods: {
    ...mapMutations(['jia']),
    // ...mapMutations({ aaa: 'jia' }),
    ...mapActions(['add']),
  },
}
</script>

<style></style>
