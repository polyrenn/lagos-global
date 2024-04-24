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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;" :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city text-uppercase">
                Transport
              </div>
              <div
                class="mt-3 env-banner-text"
              >
                Lagos transport sector has greatly improved over the recent past. <br> The return on investment in transport ranges from 12% to 15%
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="industry-highlight text-center mb-5">
              Industry Highlights
            </div>
            <div class="row">
              <div class="col-sm-6  align-items-center justify-content-center" style="color: #0B76B7">
                <div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lagos airport accounts for about 83% of international flight arrivals in the country
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lagos freight traffic is projected to increase by 10-14 times over the next 30 years
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height2" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lagos port accounts for about 70% of total cargo freight into the country and its forecast t have a real growth of 5.3% in the next 4 years
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height2" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lagos rail transit is forecast to have a real growth of 110% in the first 8years and an annualized growth of9.8%
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height3" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lagos has a high end transportation service, called Uber transport system that moves riders from one location to another in a more comfy and luxurious atmosphere
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px; background-color: #0B76B7" />
                        <div class="trans-height3" style="border-left: 1px solid #0B76B7; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text">
                        Lekki deep seaport estimated to cost $1 6 billion which could be the gateway to West Africa market. is being constructed to decongest Apapa port and Tin can island
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center pt-0 mt-o">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2  h-100">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div style="border-radius: 50%;width: 24px; height: 24px;background-color: #0B76B7" />
                        <!--                        <div style="border-left: 1px solid #0B76B7;height: 40px; margin-left: 12px" />-->
                      </div>
                      <div class="col-10 key-driver-text">
                        Ropeways Transport Limited investment of about $275 million in cable cars project to cover about 12.8km
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6  align-items-center justify-content-center startup-margin">
                <div class="traffic-width py-5 industry-card">
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Total Traffic Passenger
                        </div>
                        <div>
                          7 miillion Passenger trips/day
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center pt-0 mt-o">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2  h-100">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Road Network Population
                        </div>
                        <div>
                          0.6km/1000 populationy
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <div style="border-left: 1px solid white;height: 85px; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Project frieght traffice forecast
                        </div>
                        <div>
                          Increase by 10 - 14 times over the next 30 years
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Project rail traffice forecast
                        </div>
                        <div>
                          110% in the first 8 years and an annual growth of 9.8%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <div style="border-left: 1px solid white;height: 90px; margin-left: 12px" />
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Total Cargo Freight into the Country
                        </div>
                        <div>
                          70% and forecast real growth of 5.3% in the next 4 Years
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                    <div class="row w-75 justify-content-center">
                      <div class="col-2">
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px" />-->
                        <div class="bg-white" style="border-radius: 50%;width: 24px; height: 24px" />
                        <!--                        <div style="border-left: 1px solid white;height: 70px; margin-left: 12px"  />-->
                      </div>
                      <div class="col-10 key-driver-text text-white">
                        <div class="font-weight-bold">
                          Recent development
                        </div>
                        <div>
                          Stimulation of private sector investment in ferry services
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="auto-container" style="background-color:   #F9F9F9;margin-bottom: 70px">
            <div class="row">
              <div class="col-sm-6 d-flex justify-content-center px-sm-5">
                <img src="~/assets/images/transport33.png">
              </div>
              <div class="col-sm-6">
                <div class="industry-highlight mb-2">
                  Investing in Bus Rapid Transit
                </div>
                <div class="power-body2 text-dark">
                  <p>
                    The existing BRT system serves about 2000, 000 passengers daily which accounts for about 3% of total daily road users in the state. Pssenger demand for BRT has thus, supassed the available buses and it is estimated that over 300 buses would be needed to fully satisfy the demand
                  </p>
                  <p>
                    The road network density of 0.6km per 1000 population is low by the standard of other mega cities and increase volume of vehicular movement demands for the provison of a corresponding high number of functional road infrastructures.
                  </p>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color:  rgba(11, 118, 183, 0.1);border-radius: 10px;">
                    <img src="~/assets/images/trans-icon3.png">
                  </div>
                  <div class="ml-3 power-body2 text-dark">
                    Average investment required <br>
                    $2 million - $12 million
                  </div>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(11, 118, 183, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/trans-icon2.png" height="24px">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      ROl <br>
                      12%-22%
                    </div>
                  </div>
                  <div class="d-flex ml-5">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(11, 118, 183, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/trans-icon1.png">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      Payback period <br>
                      5 years
                    </div>
                  </div>
                </div>
                <div class="mt-3 power-body2 text-dark">
                  The cost of buses and stations would account for 65%
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style="padding-bottom: 100px">
          <div class="auto-container" style="background-color:   #F9F9F9">
            <div class="row flex-column-reverse flex-sm-row">
              <div class="col-sm-6 pt-5">
                <div class="industry-highlight mb-2">
                  Investing in Ferry Services
                </div>
                <div class="power-body2 text-dark">
                  <p>
                    Lagos is covered by 1/5th of water but just only 10% of the population use it to get around the city on a daily basis
                  </p>
                  <p>
                    Opportunity exist for ferry shuttles between lagos island and the mainland as well as within the riverine areas
                  </p>
                </div>
              </div>
              <div class="col-sm-6 d-flex justify-content-center">
                <img src="~/assets/images/transport31.png">
              </div>
            </div>
          </div>
        </section>
        <section style="padding-bottom: 100px">
          <div class="auto-container" style="background-color:   #F9F9F9">
            <div class="row">
              <div class="col-sm-6 d-flex justify-content-center">
                <img src="~/assets/images/transport32.png">
              </div>
              <div class="col-sm-6 pt-5">
                <div class="industry-highlight mb-2">
                  Investing in Rail Services
                </div>
                <div class="power-body2 text-dark">
                  <p>
                    The existing roads are very overcrowded with Lagos residents spending upto 6hours of their work day commuting in heavy traffic and this drives the need for constrcution of 193km inter-modal light rail system across 5 corridors in the state
                  </p>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color:  rgba(11, 118, 183, 0.1);border-radius: 10px;">
                    <img src="~/assets/images/trans-icon3.png">
                  </div>
                  <div class="ml-3 power-body2 text-dark">
                    Average investment required <br>
                    $70 million - $100 million
                  </div>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(11, 118, 183, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/trans-icon2.png" height="24px">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      ROl <br>
                      30%-35%
                    </div>
                  </div>
                  <div class="d-flex ml-5">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(11, 118, 183, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/trans-icon1.png">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      Payback period <br>
                      5 years
                    </div>
                  </div>
                </div>
                <div class="mt-3 power-body2 text-dark">
                  The cost of buses and stations would account for 65%
                </div>
              </div>
            </div>
          </div>
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
import backgroundUrl from '~/assets/images/background/transportation-bi.png'
import backgroundUrl2 from '~/assets/images/background/current-bi.png'

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
      backgroundUrl2
    }
  }
}
</script>

<style>

</style>
