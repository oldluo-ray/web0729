<template>
  <div>
    <Test>
      <div slot="tip">123</div>
      <img slot="content" src="./assets/pro.jpg" alt="" />
      <!-- <template slot="some">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </template> -->
      <template v-slot:some>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </template>
    </Test>
    <Test>
      <img src="./assets/lsp.jpg" alt="" />
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
