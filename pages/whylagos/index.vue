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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center">
              <div class="w-100 text-center africa-global-city">
                WHY LAGOS
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: rgba(5,33,54,0.01961)">
          <div class="auto-container text-center">
            <div class="graph-container">
              <div class="row  justify-content-center h-100 mt-5">
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2">
                  <img src="~/assets/images/graph30.png" style="width: 128px; height: 128px">

                  <div class="font-weight-bold text-dark">
                    Contributes more than 30% of Nigeria GDP
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph60.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    Responsible for about 60% of energy demand in Nigeria
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph90.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    Accounts for 90% Nigeria’s foreign Trade flow
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph50.png" style="width: 141px; height: 128px">

                  <div class="font-weight-bold text-dark">
                    Generate over 50% of Nigeria’s port revenues
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph70.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    70% of the state revenue is internally generated
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-center justify-content-center p-4 mt-5">
              <div class="our-text">
                OTHER ATTRACTIONS
              </div>
            </div>
            <div class="row pt-5 text-dark">
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column">
                <i
                  class="fa fa-money-bill"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="pl-3 font-weight-bold mt-4 text-uppercase">
                  Tax holiday and full repatriation of profit at lekki toll gate
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column startup-margin">
                <i
                  class="fa fa-certificate"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="pl-3 font-weight-bold mt-4 text-uppercase">
                  Access to a large market and gateway to other west African Markets
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column startup-margin">
                <i
                  class="fa fa-money-check"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="pl-3 font-weight-bold mt-4 text-uppercase">
                  Burgeoning middle class with disposable income
                </div>
              </div>
            </div>
            <div class="row mt-5 pt-5 text-dark">
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column">
                <i
                  class="fa fa-balance-scale-right"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="pl-3 font-weight-bold mt-4 text-uppercase">
                  Sound legal and regulatory framework that protects investments
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column startup-margin">
                <i
                  class="fa fa-globe"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="pl-3 font-weight-bold mt-4 text-uppercase">
                  Safe and secure business environment
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-xl-4 col-lg-4 d-flex flex-column startup-margin">
                <i
                  class="fa fa-school"
                  style="color: #1B6C9E;
                             text-shadow: 1px 1px 1px #ccc;
                             font-size: 2.5em;"
                />
                <div class="ml-3 font-weight-bold mt-4 text-uppercase">
                  Stable Political environment
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #F5FBFF">
          <div class="auto-container">
            <div class="our-text pb-5 text-center">
              OUR FOCAL SECTORS
            </div>
            <div class="row">
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/environment.png" class="img-fluid">
              </div>
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #e6f2ff;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2">
                  Environment
                </div>
                Empowered environmental agencies to effectively carry-out climate action for a sustainable lifestyle
                <a href="/environment" style="border: 2px solid #1B6C9E" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-sm-row" style="margin-top: 120px">
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #ffe6e6;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #C9212E">
                  Health
                </div>
                Provide qualitative, affordable and equitable healthcare service.

                <a href="/health" style="border: 2px solid #C9212E;color: #C9212E" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/health.png" class="img-fluid">
              </div>
            </div>
            <div class="row" style="margin-top: 120px">
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/agriculture.png" class="img-fluid rounded" style="width: 100%">
              </div>
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #f9ffe6;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2 text-success">
                  Agriculture
                </div>
                Empowerment of farmers, promotion of agricultural value-chain, commencement ofagro-processing and expansion offish production.

                <a href="/agriculture" style="border: 2px solid green" class="px-3 py-1 rounded mt-3 text-success opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-sm-row" style="margin-top: 120px">
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #e6f2ff;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2 text-primary">
                  Housing
                </div>
                Expand Lagos Home Ownership Scheme (HOMS), pursue urban renewal scheme, and enforce housing control laws & regulations

                <a href="/housing" style="border: 2px solid #007bff" class="px-3 py-1 rounded mt-3 text-primary opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/housing.png" class="img-fluid rounded" style="width: 100%">
              </div>
            </div>
            <div class="row" style="margin-top: 120px">
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/transportation2.png" class="img-fluid rounded" style="width: 100%">
              </div>
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #e6e6ff;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #274595">
                  Transportation
                </div>
                Pursue integrated multi-modal transport system and adherence to global pollution levels/standards.

                <a href="/transportation" style="border: 2px solid #274595; color: #274595" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-sm-row" style="margin-top: 120px">
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #f9ffe6;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2 text-success">
                  Tourism
                </div>
                Promote the attainment of sustainable tourism development through an enabling environment

                <a href="/tourism" style="border: 2px solid green" class="px-3 py-1 rounded mt-3 text-success opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/tourism.png" class="img-fluid rounded" style="width: 100%">
              </div>
            </div>
            <div class="row" style="margin-top: 120px">
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/ict.png" class="img-fluid rounded" style="width: 100%">
              </div>
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #fff9e6;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #B38B0C">
                  ICT
                </div>
                To ensure a digitized economy and enhance productivity through ICT Technology and Innovations

                <a href="/technology" style="border: 2px solid #B38B0C; color: #B38B0C" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-sm-row" style="margin-top: 120px">
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #e6f2ff;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #4BB8D2">
                  Power & Infrastucture
                </div>
                Expand IPP scheme, pursue I ntegrated transport facilities, road, mono-rail and adopt e- traffic technology

                <a href="/power" style="border: 2px solid #4BB8D2; color: #4BB8D2" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/power.png" class="img-fluid rounded" style="width: 100%">
              </div>
            </div>
            <div class="row" style="margin-top: 120px">
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/oil.png" class="img-fluid">
              </div>
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #e6f2ff;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #274595">
                  Oil & Gas
                </div>
                Proper financial and statistical planning, establishment of Lagos Finance and Development Commission

                <a href="/oilandgas" style="border: 2px solid #274595; color: #274595" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
            </div>
            <div class="row flex-column-reverse flex-sm-row" style="margin-top: 120px">
              <div
                class="col-sm-6  d-flex flex-column align-items-start text-dark pt-4 pl-5"
                style="background-color: #f2f2f2;
                        border-radius: 10px;"
              >
                <div class="focal-sector-h mb-2" style="color: #274595">
                  Education
                </div>
                Systematic integration of Tourism, Hospitality, Entertainment / Arts, Sports for Excellence.

                <a href="/education" style="border: 2px solid #274595; color: #274595" class="px-3 py-1 rounded mt-3 opac">
                  Read More <i class="fa fa-arrow-right pl-1" />
                </a>
              </div>
              <div
                class="col-sm-6"
              >
                <img src="~/assets/images/education.png" class="img-fluid rounded" style="width: 100%">
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
import backgroundUrl from '~/assets/images/background/whylagos.png'

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
      backgroundUrl
    }
  }
}
</script>

<style>

</style>
