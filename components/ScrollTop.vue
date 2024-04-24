<template>
  <div class="scroll-to-top scroll-to-target" data-target="html" @click="scrollToTop">
    <span class="icon flaticon-up-arrow-angle" />
  </div>
</template>

<script>

export default {
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}

</script>
