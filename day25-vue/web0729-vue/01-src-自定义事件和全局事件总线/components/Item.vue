<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.isDone" />
      <span :class="{ active: todo.isDone }">{{ todo.todoName }}</span>
    </label>
    <button class="btn btn-danger" @click="handle">删除</button>
  </li>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    handle() {
      this.$bus.$emit('del', this.todo.id)
    },
  },
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  display: flex;
  align-items: center;
  float: left;
  cursor: pointer;
}

li label span.active {
  color: #ccc;
  text-decoration: line-through;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none !important;
  margin-top: 3px;
}

li:hover button {
  display: block !important;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
