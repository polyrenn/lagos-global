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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.1) -9.68%, rgba(25, 53, 102, 0.1) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city">
                HOUSING
              </div>
              <div
                class="mt-3 env-banner-text"
              >
                Lagos is experiencing a huge boom in <br> population and as such requires more housing
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-6">
                <img src="~/assets/images/housing3.png" height="482.47px;">
              </div>
              <div class="col-sm-6  align-items-center justify-content-center">
                <div class="key-driver mb-2 font-weight-bold mt-4" style="margin-left: -30px">
                  KEY DRIVERS
                </div>
                <div class="row align-items-center justify-content-center">
                  <div class="row key-drivers-width align-items-center justify-content-center">
                    <div class="col-2">
                      <div style="height: 40px; margin-left: 12px" />
                      <div class="bg-danger" style="border-radius: 50%;width: 24px; height: 24px" />
                      <div style="border-left: 1px solid #ff0000;height: 40px; margin-left: 12px" />
                    </div>
                    <div class="col-10 key-driver-text">
                      Increasing population with annual growth of 3.2%
                    </div>
                  </div>
                </div>
                <div class="row  align-items-center justify-content-center  pb-0 mb-0" />
                <div class="row align-items-center justify-content-center pt-0 mt-o">
                  <div class="row key-drivers-width align-items-center justify-content-center">
                    <div class="col-2  h-100">
                      <div style="border-left: 1px solid #ff0000;height: 50px; margin-left: 12px" />
                      <div class="bg-danger" style="border-radius: 50%;width: 24px; height: 24px" />
                      <div style="border-left: 1px solid #ff0000;height: 50px; margin-left: 12px" />
                    </div>
                    <div class="col-10 key-driver-text">
                      The Nigerian Mortgage <br> Re-financing Company is providing increased access to liquidity and long-term funds.
                    </div>
                  </div>
                </div>
                <div class="row align-items-center justify-content-center">
                  <div class="row key-drivers-width align-items-center justify-content-center">
                    <div class="col-2">
                      <div style="border-left: 1px solid #ff0000;height: 50px; margin-left: 12px" />
                      <div class="bg-danger" style="border-radius: 50%;width: 24px; height: 24px" />
                      <div style="height: 50px; margin-left: 12px" />
                    </div>
                    <div class="col-10 key-driver-text">
                      The Federal government has made $300 million available to support real estate development.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style="background-color: #68a8da17; padding: 110px 0px 70px;">
          <div class="auto-container">
            <div class="row p-2">
              <div class="col-sm-6 d-flex font-weight-bold align-items-center justify-content-center current-situation">
                Current Situation <br> in Real Estate
              </div>
              <div class="col-sm-6">
                <div class="row" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Housing Deficit
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    5 million units
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Housing Demand
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    20% growth / annum
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Av. Population Growth
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    Over 1,500 people/ day
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Influx of Expatriates
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    About 10,000 / annum
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Growth of malls
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    1 - 13 malls within 9 years
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Contribution to mortgage
                  </div>
                  <div class="col-7 text-dark current-situation-text px-3 py-2" style="background-color: lightblue">
                    2.5% of monthly wage
                  </div>
                </div>
                <div class="row mt-4" style="background-color: lightblue">
                  <div class="col-5 text-white current-situation-text px-3 py-2" style="background-color: #0B76B7;border-radius: 5px 5px 0px 0px;">
                    Recent development
                  </div>
                  <div class="col-7  text-dark current-situation-text px-3 py-2" style="background-color: lightblue;font-size: 12px;">
                    72 houses built to meet demand for low cost housing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style="background-color: white; padding: 110px 0px 70px;">
          <div class="auto-container">
            <div class="current-estate">
              Lagos real estate is relatively unsaturated, this <br> makes it an attractive investment destination
            </div>
            <div class="row mt-5">
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/current-resident.png" height="482.47px;">
              </div>
              <div class="col-sm-6 p-5">
                <div class="current-estate-heading">
                  Investing in Residential Housing
                </div>
                <div class="current-estate-text">
                  A substantial percentage of every individual's wage is contributed to a fund controlled by the Federal Mortgage Bank of Nigeria to provide mortgages to low-income families and to support the development of low cost homes. The recently completed low cost residential houses in the state has further emphasized this opportunity, as more people are now able to afford a mortgaged home.
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/current-investing.png" height="482.47px;">
              </div>
              <div class="col-sm-6 p-5">
                <div class="current-estate-heading">
                  Investing in Office Building
                </div>
                <div class="current-estate-text">
                  Lagos being the economic hub of West Afr ica houses the headquarters of over 90% of companies in Nigeria , this shows the need for construct ion of office space to meet current demand
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6 py-5 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/current-mall.png" height="482.47px;">
              </div>
              <div class="col-sm-6 p-5">
                <div class="current-estate-heading mt-5">
                  Investing in Malls
                </div>
                <div class="current-estate-text ">
                  The annual growth in the retail sector of 7.4% has had an implicit effect on the high demand of modern malls. The Palms Lekki mall has expanded to abo ut do uble its current size to meet the current situation.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="banner-section banner-one" style="background-color:  white; padding: 110px 0px 70px;">
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 300px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.1) -9.68%, rgba(25, 53, 102, 0.1) 59.8%), url(${backgroundUrl3})` }">
            <div class="mt-3 row h-100" style="font-style: normal; font-weight: normal;font-size: 32px; line-height: 153%;text-align: center; color: #FFFFFF;">
              <div class="col-sm-6 h-100 d-flex align-items-center justify-content-center">
                <div class="p-5">
                  Lagos State real estate market has an <br> average return on investment of 30%
                </div>
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <section style="background-color: #68a8da17; padding: 110px 0px 70px;">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-3">
                <div class="current-card d-flex align-items-center justify-content-center text-white" :style="{ backgroundImage: `url(${backgroundUrl2})`}" style="height: 198px;background-repeat: no-repeat;background-size: 100% 100%">
                  Low Cost Housing
                </div>
                <div class="current-card-text mt-2">
                  Required Investment
                </div>
                <div class="current-card-text">
                  per housing unit:
                </div>
                <div class="current-card-text text-danger">
                  $30,000-$60,000
                </div>
                <div class="current-card-text mt-2">
                  ROI: <span class="text-danger">6%-9%</span>
                </div>
                <div class="current-card-text mt-2">
                  Rental yield: <span class="text-danger">8%</span>
                </div>
                <div class="current-estate-text mt-2">
                  Payback Period: <span class="text-danger">14 years</span>
                </div>
              </div>
              <div class="col-sm-3 graph-margin2">
                <div class="current-card d-flex align-items-center justify-content-center text-white" :style="{ backgroundImage: `url(${backgroundUrl21})`}" style="height: 198px;background-repeat: no-repeat;background-size: 100% 100%">
                  Luxury Housing
                </div>
                <div class="current-card-text mt-2">
                  Required Investment
                </div>
                <div class="current-card-text">
                  per housing unit:
                </div>
                <div class="current-card-text text-danger">
                  $30,000-$60,000
                </div>
                <div class="current-card-text mt-2">
                  ROI: <span class="text-danger">6%-9%</span>
                </div>
                <div class="current-card-text mt-2">
                  Rental yield: <span class="text-danger">8%</span>
                </div>
                <div class="current-estate-text mt-2">
                  Payback Period: <span class="text-danger">14 years</span>
                </div>
              </div>
              <div class="col-sm-3 graph-margin2">
                <div class="current-card d-flex align-items-center justify-content-center text-white" :style="{ backgroundImage: `url(${backgroundUrl22})`}" style="height: 198px;background-repeat: no-repeat;background-size: 100% 100%">
                  Malls & Retail Stores
                </div>
                <div class="current-card-text mt-2">
                  Required Investment
                </div>
                <div class="current-card-text">
                  per housing unit:
                </div>
                <div class="current-card-text text-danger">
                  $30,000-$60,000
                </div>
                <div class="current-card-text mt-2">
                  ROI: <span class="text-danger">6%-9%</span>
                </div>
                <div class="current-card-text mt-2">
                  Rental yield: <span class="text-danger">8%</span>
                </div>
                <div class="current-estate-text mt-2">
                  Payback Period: <span class="text-danger">14 years</span>
                </div>
              </div>
              <div class="col-sm-3 graph-margin2">
                <div class="current-card d-flex align-items-center justify-content-center text-white;" :style="{ backgroundImage: `url(${backgroundUrl23})`}" style="height: 198px;background-repeat: no-repeat;background-size: 100% 100%">
                  Office <br> /Commercial <br> Housing
                </div>
                <div class="current-card-text mt-2">
                  Required Investment
                </div>
                <div class="current-card-text">
                  per housing unit:
                </div>
                <div class="current-card-text text-danger">
                  $30,000-$60,000
                </div>
                <div class="current-card-text mt-2">
                  ROI: <span class="text-danger">6%-9%</span>
                </div>
                <div class="current-card-text mt-2">
                  Rental yield: <span class="text-danger">8%</span>
                </div>
                <div class="current-estate-text mt-2">
                  Payback Period: <span class="text-danger">14 years</span>
                </div>
              </div>
            </div>
            <div class="current-land py-5">
              *Land and building materials account for 54% of investment required
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
import backgroundUrl from '~/assets/images/background/housing2.png'
import backgroundUrl2 from '~/assets/images/background/house40.png'
import backgroundUrl21 from '~/assets/images/background/house41.png'
import backgroundUrl22 from '~/assets/images/background/house42.png'
import backgroundUrl23 from '~/assets/images/background/house43.png'
import backgroundUrl3 from '~/assets/images/background/housing-bi30.png'

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
      backgroundUrl21,
      backgroundUrl22,
      backgroundUrl23,
      backgroundUrl3
    }
  }
}
</script>

<style>

</style>
