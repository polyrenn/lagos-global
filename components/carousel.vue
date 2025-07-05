<template>
  <VueCarousel :items-to-show="1.5" :wrap-around="true">
    <slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </VueCarousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel as VueCarousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    VueCarousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>
