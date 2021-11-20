<template>
  <div>
    <button @click="isShow = !isShow">按钮</button>
    <h1>vue中提供的过滤和动画</h1>
    <!-- <p :class="{ xxx: true, yyy: isShow }"></p> -->
    <transition name="hello" appear>
      <p v-if="isShow"></p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<style>
p {
  background-color: pink;
  height: 100px;
}

/* .xxx {
  transition: opacity 1s;
}
.yyy {
  opacity: 0;
} */

/* .xxx-enter-active,
.xxx-leave-active {
  transition: opacity 1s;
}

.xxx-enter,
.xxx-leave-to {
  opacity: 0;
} */

/* 当进入和离开时,要执行的过渡 */
/* .hello-enter-active,
.hello-leave-active {
  transition: 1s;
} */
/* 起始位置 */
/* .hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
} */
/* 结束位置 */
/* .hello-enter-to,
.hello-leave {
  transform: translateX(0);
} */

.hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}
</style>
