<template>
  <footer class="main-footer">
    <!--Widgets Section-->

    <div class="widgets-section">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-lg-3 col-md-6 col-sm-12 text-center px-2">
            <div class="footer-widget about-widget">
              <div class="logo">
                <a href="/"><img width="150" height="150" src="~/assets/images/logo.png" alt=""></a> <br>
                <span>Lagos Global</span>
              </div>

              <div class="address">
                <h5>Sustainable Development Goals & Investment</h5>

                <div class="text">
                  3rd Floor, Admin Block,
                  Governor's Office,
                  State House,
                  Alausa - Ikeja,
                  Lagos
                </div>
              </div>

              <div class="address">
                <h5>Opening hrs</h5>

                <div class="text">
                  10am to 6pm, Sun: Closed
                </div>
              </div>
            </div>
          </div>
          <!--Column-->

          <div class="column col-lg-2 col-md-6 col-sm-12 px-2">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Useful links</h4>
              </div>

              <div class="widget-content">
                <ul class="links">
                  <!-- <li class="py-1">
                    <a href="/resources">Resources</a>
                  </li> -->

                  <!--                  <li class="py-1">-->
                  <!--                    <a href="#">Business Opportunities</a>-->
                  <!--                  </li>-->

                  <li class="py-1">
                    <a href="/glancelagos">Lagos at a glance</a>
                  </li>

                  <li class="py-1">
                    <a href="/#latestnews">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--Column-->

          <div class="column col-lg-2 col-md-6 col-sm-12 px-2">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Support</h4>
              </div>

              <div class="widget-content">
                <ul class="links">
                  <li class="py-1">
                    <a href="/contact">Speak to our team</a>
                  </li>

                  <!--                  <li class="py-1">-->
                  <!--                    <a href="#">How can we help</a>-->
                  <!--                  </li>-->

                  <!--                  <li><a href="#">Process and requirements</a></li>-->

                  <li><a href="/#startup">Success stories</a></li>

                  <!--                  <li><a href="#">Business resources</a></li>-->

                  <li><a href="/faq">Frequently asked question</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->

          <div class="column col-lg-2 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Follow Us</h4>
              </div>

              <div class="widget-content">
                <ul class="links">
                  <li class="d-flex py-1">
                    <a target="_blank" href="https://web.facebook.com/Lagos-SDG-Invest-123360722387457/"><span class="fab fa-facebook-f text-white" /><span class="pl-2">Facebook</span></a>
                  </li>
                  <li class="d-flex py-1">
                    <a target="_blank" href=" https://twitter.com/lagossdginvest"><span class="fab fa-twitter text-white" /><span class="pl-2">Twitter</span></a>
                  </li>
                  <li class="d-flex py-1">
                    <a target="_blank" href="https://www.instagram.com/lagossdg.invest/"><span class="fab fa-instagram text-white" /><span class="pl-2">Instagram</span></a>
                  </li>
                  <!--                  <li class="d-flex py-1">-->
                  <!--                    <a href="#"><span class="fab fa-youtube text-white" /></a><span class="pl-2">Youtube</span>-->
                  <!--                  </li>-->
                  <!--                  <li class="d-flex py-1">-->
                  <!--                    <a href="#"><span class="fab fa-linkedin text-white" /></a><span class="pl-2">Linkedin</span>-->
                  <!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>

          <!--Column-->

          <div class="column col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Receive Our Newsletter</h4>
              </div>

              <div class="widget-content">
                <ul class="links">
                  <li><a href="#">For the latest update on Lagos Global enter your email address</a></li>
                </ul>
                <form @submit.prevent="fetch">
                  <div class="form-group mt-4">
                    <input
                      id="exampleInputEmail1"
                      v-model="email"
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    >
                    <small id="emailHelp" class="form-text text-muted pt-2">Do you consent to having this website store your information in order to process your request?</small>
                    <div class="form-check">
                      <input id="exampleCheck1" type="checkbox" class="form-check-input">
                      <label class="form-check-label" for="exampleCheck1">Yes</label>
                    </div>
                  </div>
                  <button :disabled="loading" v-if="!loading" type="submit" class="btn btn-primary w-100 mt-4">
                    Submit
                  </button>
                  <button :disabled="loading" v-if="loading" type="submit" class="btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center">
                    <div class="loaderButton" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!--Column-->

          <!--          <div class="column col-lg-3 col-md-6 col-sm-12">-->
          <!--            <div class="footer-widget num-widget">-->
          <!--              <div class="widget-title">-->
          <!--                <h4>Emergency</h4>-->
          <!--              </div>-->

          <!--              <div class="widget-content">-->
          <!--                <ul class="num-links">-->
          <!--                  <li><a href="index.html#">Police <span class="hvr-info">Call: 977</span></a></li>-->

          <!--                  <li><a href="index.html#">Ambulance <span class="hvr-info">Call: 911</span></a></li>-->

          <!--                  <li><a href="index.html#">Fire Brigade <span class="hvr-info">Call: 922</span></a></li>-->

          <!--                  <li><a href="index.html#">Gas service <span class="hvr-info">Call: 111</span></a></li>-->

          <!--                  <li><a href="index.html#">Poison centre <span class="hvr-info">Call: 101</span></a></li>-->
          <!--                </ul>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->

          <!--Column-->
        </div>
      </div>
    </div>

    <!--     Footer Bottom -->

    <div class="footer-bottom">
      <div class="inner">
        <div class="copyright">
          Copyrights <a href="#" class="text-white">&copy; 2020 Lagos Global.</a> All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      email: '',
      loading: false
    }
  },
  methods: {
    async fetch () {
      this.loading = true
      this.posts = await fetch('https://api.lagosglobal.org/api/v1/subscribe', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: this.email })
      }).then((res) => {
        this.loading = false
        this.email = ''
        alert('Success')
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
