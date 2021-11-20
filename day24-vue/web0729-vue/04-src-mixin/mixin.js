export const hunru = {
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    handle() {
      this.count = this.count + 1
    },
  },

  //   watch: {
  //     count(newValue) {
  //       console.log(newValue, this)
  //     },
  //   },

  computed: {
    big() {
      return this.count * 10
    },
  },

  mounted() {
    console.log('混入')
  },
}
