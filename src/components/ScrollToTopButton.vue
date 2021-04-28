<template>
  <div
    v-show="top"
    class="fixed bottom-0 right-0 mx-12 md-mx-44 mb-5"
  >
    <button
      @click="scrollToTop"
      class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    top: false
  }),
  created () {
    window.addEventListener('scroll', this.isTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.isTop)
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    isTop () {
      document.body.scrollTop > 70 || document.documentElement.scrollTop > 70
        ? this.top = true
        : this.top = false
    },
  }
}
</script>
