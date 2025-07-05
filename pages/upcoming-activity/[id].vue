/* eslint-disable */
<template>
  <div>
    <div class="page-wrapper">
      <!-- Preloader -->
            <div v-if="loading" class="preloader">
              <div class="icon" />
            </div>

      <!-- Main Header -->
      <Header />
      <!-- End Main Header -->

      <!--Search Popup-->
      <SearchPopup />

      <div v-if="post.created_at">
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="d-flex align-items-center justify-content-center">
              <div class="py-2 px-3 text-white" style="width: fit-content; background-color: #2D3D67; border-radius: 20px">
                Upcoming Activities & Events
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-5" style="color: #0A467C; font-size: ">
              <div>
                {{ post.date }}
              </div>
              <div class="pl-2">
                | {{ post.data.location }}
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center w-100 mt-3">
              <div class="edu-header1 text-center w-75 text-center">
                {{ post.name }}
              </div>
            </div>
            <div class="mt-5 d-flex align-items-center justify-content-center">
              <img :src="`https://api.lagosglobal.org/api/v1/media/${post.image}`" >
            </div>
            <div class="p-5 edu-body1 mt-5" v-html="post.details" />
          </div>
        </section>
      </div>
      <div style="height: 300px; align-items: center; justify-content: center; display: flex" v-if="!loading && !post.created_at">
        No Post
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
    Footer
  },
  methods: {
    async fetch () {
      this.loading = true
      const post = await fetch(`https://api.lagosglobal.org/api/v1/events/${this.$route.params.id}`)
        .then(res => res.json())
      this.loading = false
      if (post.data) {
        this.post = post.data
      } else {
        this.loading = false
        throw new Error('Post not found')
      }
    },
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
      post: {},
      loading: true
    }
  },
  mounted () {
    this.fetch();
  }
}
</script>

<style>

</style>
