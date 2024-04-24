/* eslint-disable */
<template>
  <div>
    <div class="page-wrapper">
      <!-- Preloader -->
      <div class="preloader">
        <div class="icon" />
      </div>

      <!-- Main Header -->
      <Header />
      <!-- End Main Header -->

      <!--Search Popup-->
      <SearchPopup />

      <div>


        <div v-if="loading" class="preloader2">
          <div class="icon" />
        </div>

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="edu-header1 text-center">
              All Start Up stories
            </div>
            <div class="row mt-5" v-if="posts.length > 0">
              <div v-for="item in posts" :key="item.id" class="col-sm-6 h-100 p-3">
                <div class="p-2">
                  <a style="color: inherit" :href="`startup-stories/${item.id}`">
                    <div class="story-board h-100">
                      <img :src="`https://api.lagosglobal.org/api/v1/media/${item.image}`" class="img-fluid" style="height: 300px; width: 100%">
                      <div class="story-board-category font-weight-bold mt-2">
                        {{ item.title }}
                      </div>
                      <div class="story-board-content" v-if="item.content" style="color: #0A2C36">
                        {{ item.content.toString().replace(/<[^>]*>/g, '') | truncate(100, '...') }}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="auto-container p-2 d-flex justify-content-end" v-if="total > 15">
          <pagination v-model="page" :records="total" :per-page="per_page" @paginate="increase"/>
        </div>

      </div>
    </div>

    <!--End pagewrapper-->

    <!-- Main Footer -->
    <Footer />

    <!--Scroll to top-->
    <ScrollTop />
  </div>
</template>

<script>
import ScrollTop from '@/components/ScrollTop'
import Pagination from 'vue-pagination-2';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchPopup from '../../components/SearchPopup'
import bannerImageOne from '~/assets/images/main-slider/1.jpg'
import bannerImageTwo from '~/assets/images/main-slider/2.jpg'
import bannerImageThree from '~/assets/images/main-slider/3.jpg'
import patternImage from '~/assets/images/background/pattern-1.png'
import testimonialBackground from '~/assets/images/background/image-2.jpg'
import suggestionBackground from '~/assets/images/background/image-5.jpg'
import sanwoOluBackground from '~/assets/images/background/image-1-test.jpg'
import backgroundUrl from '~/assets/images/background/edu30.png'
import backgroundUrl2 from '~/assets/images/background/edu-bi2.png'
import backgroundUrl3 from '~/assets/images/background/ict-bi3.png'
import backgroundUrl4 from '~/assets/images/background/ict-bi4.png'

export default {
  components: {
    ScrollTop,
    Header,
    SearchPopup,
    Footer,
    Pagination,
  },
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },
  data () {
    return {
      bannerImageOne,
      bannerImageTwo,
      bannerImageThree,
      patternImage,
      testimonialBackground,
      suggestionBackground,
      sanwoOluBackground,
      backgroundUrl,
      backgroundUrl2,
      backgroundUrl3,
      backgroundUrl4,
      page: 1,
      per_page: 0,
      posts: [],
      total: 0,
      loading: false
    }
  },
  methods: {
    increase() {
      this.fetch()
    },
    async fetch() {
      this.loading = true
      const post = await fetch(`https://api.lagosglobal.org/api/v1/stories?page=${this.page}`)
        .then((res) => res.json())
      this.loading = false
      if (post.data.length > 0) {
        this.posts = post.data
        this.per_page = post.meta.per_page
        this.total = post.meta.total
      } else {
        throw new Error('Post not found')
        this.loading = false
      }
    },
  },
  created () {
    this.fetch()
  }
}
</script>

<style>

</style>
