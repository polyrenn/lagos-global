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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;" :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city">
                POWER
              </div>
              <div
                class="mt-3 env-banner-text"
              >
                Lagos has a high demand for <br> power that out-ways its supply
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="power-header text-center mb-5">
              Lagos Energy Demand Outstrips Supply
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="power-header2">
                  5,000MW
                </div>
                <div class="power-body">
                  Current Power Demand (2015)
                </div>
              </div>
              <div class="col-sm-4 startup-margin">
                <div class="power-header2">
                  10,000MW
                </div>
                <div class="power-body">
                  Projected Power Demand (2020)
                </div>
              </div>
              <div class="col-sm-4 startup-margin">
                <div class="power-header2">
                  1,953MW
                </div>
                <div class="power-body">
                  Power Supply (Available)
                </div>
              </div>
            </div>
            <div class="power-header3 text-center mt-5">
              Lagos has a high demand for power that outweighs it’s supply due to
            </div>
            <div class="row power-body mt-5" style="background: #FFFBF5;border-radius: 20px; margin-bottom: 100px">
              <div class="col-sm-4 py-5">
                <div class="py-3">
                  <div class="pr-3 power-border">
                    due to the rising <br> population of 3.2% <br> annually. <br>
                    <span class="invisible">no content</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 py-5">
                <div class="py-3">
                  <div class="pr-3 power-border">
                    Inadequate supply of power generating companies (GENCO’s) as a result of their inability to generate enough capacity
                  </div>
                </div>
              </div>
              <div class="col-sm-4 py-5">
                <div class="py-3">
                  <div class="pr-3">
                    Inadequate and low capacity transmission lines which are responsible for about 20% of energy lost during transmission.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #D08C25;">
          <div class="auto-container">
            <div class="row p-5">
              <div class="col-sm-6">
                <div class="power-header4">
                  Lagos state is still in need of over 8,000MW of electricity
                </div>
                <div class="row power-card-body mt-5">
                  <div class="col-6 p-2 bg-white" style="border-bottom: 1px solid #D08C25">
                    Power supply
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011; border-bottom: 1px solid white">
                    2,000MW
                  </div>
                </div>
                <div class="row power-card-body">
                  <div class="col-6 p-2 bg-white" style="border-bottom: 1px solid #D08C25">
                    Power demand
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011; border-bottom: 1px solid white">
                    10,000MW
                  </div>
                </div>
                <div class="row power-card-body">
                  <div class="col-6 p-2 bg-white" style="border-bottom: 1px solid #D08C25">
                    Electricity consumption per capital
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011; border-bottom: 1px solid white">
                    500MJ/inhabitant
                  </div>
                </div>
                <div class="row power-card-body">
                  <div class="col-6 p-2 bg-white" style="border-bottom: 1px solid #D08C25">
                    Proportion of households with access to electricity
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011; border-bottom: 1px solid white">
                    40%
                  </div>
                </div>
                <div class="row power-card-body">
                  <div class="col-6 p-2 bg-white" style="border-bottom: 1px solid #D08C25">
                    Energy lost through transmission
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011; border-bottom: 1px solid white">
                    20%
                  </div>
                </div>
                <div class="row power-card-body">
                  <div class="col-6 p-2 bg-white">
                    Recent improvements
                  </div>
                  <div class="col-6 p-2 text-white" style="background-color: #AE7011;">
                    The current IPPs have produced a combined capacity of about 48MW(2015)
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/power-img1.png" class="imagine-absolute">
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white;">
          <div class="auto-container">
            <div class="power-header5">
              The return on investment in <br> power ranges from 10% to 35%
            </div>
          </div>
        </section>
        <section class="about-section" style="background-position: center; background-repeat: no-repeat;background-size: cover;background-color: rgba(208, 140, 37, 0.85); height: 100%;margin-bottom: 100px" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
          <div class="auto-container">
            <div class="power-header6 text-center">
              Investing in Generation
            </div>
            <div class="row power-body2 mt-5 pt-0">
              <div class="col-sm-6 px-5" style="border-right:  1px solid #BDBDBD;">
                As population of Lagos State grows exponentially, energy demand is climbing to new heights. The existing IPPs have a combined capacity of about 48MW, a sharp contrast to the estimated 10,000MW requirement for the state.
                <div class="font-weight-bold mt-3">
                  Gas power plant
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Average investment required per KWh is $65,000 - $80,000
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    ROI 30% - 35%
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Payback period: 5 years
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    60% of the investment required would be spent during the construction period
                  </div>
                </div>
              </div>
              <div class="col-sm-6 px-5">
                Lagos offshore wind (Lekki axis) has potential for harvesting strong wind energy throughout the year (Average of 4.7m/s at 30m height) and the solar radiation, 4.8KWh/m2/day can also be harnessed for solar power generation
                <div class="font-weight-bold mt-3">
                  Renewables
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Capacity: 400MW offshore wind power
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Required Investment per KWh is $6,000 -$10,000
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    ROI 18% - 25%
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Capacity: 125KVA solar plant
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    Average investment required:$1.5million -$2.Smillion
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    ROI 20% - 25% with payback period of 10 years
                  </div>
                </div>
                <div class="d-flex mt-3">
                  <img src="~/assets/images/Union.png" style="max-height: 24px">
                  <div class="pl-3">
                    75% of the cost would be for turbines or solar panels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-white" style="padding-bottom: 100px">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/power-img2.png" class="imagine-absolute3">
              </div>
              <div class="col-sm-6">
                <div class="power-header7 mb-2">
                  Investing in Transmission
                </div>
                <div class="power-body2 text-dark">
                  <p>
                    The existing transmission lines are of low capacity and old and about 20% of energy is lost during transmission. This has implicit effect on power
                    demand by Lagos residents.
                  </p>
                  <p>
                    The proposed unbundling and sale of Transmission
                    Company of Nigeria (TCN) to interested private investors presents a huge opportunity for investment
                  </p>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(208, 140, 37, 0.1);border-radius: 10px;">
                    <img src="~/assets/images/power-icon1.png">
                  </div>
                  <div class="ml-3 power-body2 text-dark">
                    Average investment required <br>
                    $ 400 million - $500 million
                  </div>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(208, 140, 37, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/power-icon-4.png" height="24px">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      ROl <br>
                      25%-30%
                    </div>
                  </div>
                  <div class="d-flex ml-5">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: rgba(208, 140, 37, 0.1);border-radius: 10px;">
                      <img src="~/assets/images/power-icon3.png">
                    </div>
                    <div class="ml-3 power-body2 text-dark">
                      Payback period <br>
                      5 years
                    </div>
                  </div>
                </div>
                <div class="mt-3 power-body2 text-dark">
                  <span class="font-weight-bold" style="color: #D08C25">*</span>52% of the investment required would be spent on <br> transmission cable accessories, fuse and insulators
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color:  #D08C25">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-6">
                <div class="power-header7 text-white mb-2">
                  Investing in Distribution
                </div>
                <div class="power-body2">
                  <p>
                    The existing transformers are over loaded and not adequate with just only 15% being able to supply for its rural electrification programme over the years
                    The distribution companies are servicing only 26% of its population
                  </p>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: white;border-radius: 10px;">
                    <img src="~/assets/images/power-icon1.png">
                  </div>
                  <div class="ml-3 power-body2">
                    Average investment required <br>
                    $ 150 million - $200 million
                  </div>
                </div>
                <div class="d-flex mt-4">
                  <div class="d-flex">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: white;border-radius: 10px;">
                      <img src="~/assets/images/power-icon-4.png" height="24px">
                    </div>
                    <div class="ml-3 power-body2">
                      ROl <br>
                      10%-20%
                    </div>
                  </div>
                  <div class="d-flex ml-5">
                    <div class="d-flex align-items-center justify-content-center" style="height: 42px;width: 42px;background-color: white;border-radius: 10px;">
                      <img src="~/assets/images/power-icon3.png">
                    </div>
                    <div class="ml-3 power-body2">
                      Payback period <br>
                      5 years
                    </div>
                  </div>
                </div>
                <div class="mt-3 power-body2">
                  <span class="font-weight-bold">*</span>45% of the investment required would be spent on <br> transmission cable accessories, fuse and insulators
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/power-img3.png" class="imagine-absolute2">
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
import backgroundUrl from '~/assets/images/background/power30.png'
import backgroundUrl2 from '~/assets/images/background/power-bi2.png'

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
