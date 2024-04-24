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
        <!-- Banner Section -->

        <section class="banner-section banner-one">
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 300px;" :style="{ backgroundImage: `linear-gradient(90deg, rgba(0,34,36,0.7) 1%, rgba(0,0,0,0.7) 56%, rgba(0,212,255,0.7) 100%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city text-uppercase">
                Contact Us
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container tour-body1">
            <div class="row">
              <div class="col-sm-6 px-sm-5">
                <div class="tour-header1 mb-4" style="color: #233566;">
                  Get in touch
                </div>
                <p class="tour-body1">
                  We are eager to assist you in anyway you need, you can fill out the enquiry form and a member of our response team would reach out to you.
                </p>
                <div class="tour-body1 mt-5">
                  <div class="d-flex">
                    <i class="fa fa-envelope pr-3" aria-hidden="true" />
                    Email: osdgi@lagosstate.gov.ng
                  </div>
                </div>
                <div class="tour-body1 mt-3">
                  <div class="d-flex">
                    <i class="fa fa-map-marker pr-3" aria-hidden="true" />
                    <div>
                      Address: Office of Sustainable Development Goals and Investment,
                      3rd floor, Administrative block,
                      Governor’s office,
                      State house,
                      Alausa- Ikeja,
                      Lagos State.
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-4">
                  <a href="https://web.facebook.com/Lagos-SDG-Invest-123360722387457/" target="_blank" class="d-flex align-items-center justify-content-center" style="height: 30px;width: 30px;background-color: #3b5998;border-radius: 50%">
                    <i class="fab fa-facebook-f text-white" />
                  </a>
                  <a href="https://twitter.com/lagossdginvest" target="_blank" class="ml-4 d-flex align-items-center justify-content-center" style="height: 30px;width: 30px;background-color: #0274be;border-radius: 50%">
                    <i class="fab fa-twitter text-white" />
                  </a>
                  <a href="https://www.instagram.com/lagossdg.invest/" target="_blank" class="ml-4 d-flex align-items-center justify-content-center" style="height: 30px;width: 30px;background-color: black;border-radius: 50%">
                    <i class="fab fa-instagram text-white" />
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <form @submit.prevent="fetch">
                  <div class="form-group mt-4">
                    <label>Name(required)</label>
                    <input
                      id="exampleInputEmail1"
                      v-model="name"
                      type="text"
                      class="form-control input-color"
                      aria-describedby="emailHelp"
                      required
                    >
                  </div>
                  <div class="form-group mt-4">
                    <label>Email(required)</label>
                    <input
                      id="exampleInputEmail2"
                      v-model="email"
                      type="email"
                      class="form-control input-color"
                      aria-describedby="emailHelp"
                      required
                    >
                  </div>
                  <div class="form-group mt-4">
                    <label>Subject(required)</label>
                    <input
                      id="exampleInputEmail3"
                      v-model="subject"
                      type="text"
                      class="form-control input-color"
                      aria-describedby="emailHelp"
                      required
                    >
                  </div>
                  <div class="form-group mt-4">
                    <label for="exampleFormControlTextarea1">Your Message(required)</label>
                    <textarea id="exampleFormControlTextarea1" v-model="message" class="form-control input-color" rows="3" required />
                  </div>
                  <button v-if="!loading" :disabled="loading" type="submit" class="btn btn-primary w-100 mt-4 font-weight-bold">
                    Send
                  </button>
                  <button v-if="loading" :disabled="loading" type="submit" class="btn btn-primary w-100 mt-4 font-weight-bold d-flex align-items-center justify-content-center">
                    <div class="loaderButton" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <GmapMap
            ref="mapRef"
            :center="{lat:6.627993776372658, lng:3.4180977553785326}"
            :zoom="10"
            map-type-id="terrain"
            style="height: 500px"
            class="w-100"
          >
            <GmapMarker
              :position="{lat:6.627993776372658, lng:3.4180977553785326}"
              :clickable="true"
              :draggable="true"
              @click="center={lat:6.627993776372658, lng:3.4180977553785326}"
            />
          </GmapMap>
        </section>
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
import backgroundUrl from '~/assets/images/background/about-bi.jpg'
import backgroundUrl2 from '~/assets/images/background/ict-bi2.png'
import backgroundUrl3 from '~/assets/images/background/ict-bi3.png'
import backgroundUrl4 from '~/assets/images/background/ict-bi4.png'

export default {
  components: {
    ScrollTop,
    Header,
    SearchPopup,
    Footer
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
      markers: {
        0: {
          full_name: 'Government house Lagos',
          position: {
            lat: 6.627993776372658,
            lng: 3.4180977553785326
          }
        }
      },
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      posts: []

    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 6.630417, lng: 3.360444 })
    })
  },
  methods: {
    async fetch () {
      this.loading = true
      this.posts = await fetch('https://api.lagosglobal.org/api/v1/tickets', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: this.name, email: this.email, subject: this.subject, message: this.message })
      }).then((res) => {
        res.json()
        this.loading = false
        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
        alert('Ticket submitted successfully')
      }
      )
    }
  }
}
</script>

<style>

</style>
