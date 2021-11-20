<template>
  <ul class="todo-main">
    <Item v-for="todo in list" :key="todo.id" :todo="todo"></Item>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  props: ['list'],
  // props: {
  //   list: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  components: {
    Item,
  },
}
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
