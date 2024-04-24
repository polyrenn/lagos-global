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
                Our Resources
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container tour-body1">
            <div class="row bg-white mt-3" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img1.jpg" class="w-100 h-100">
              </div>
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos State government Agricultural Sector Deal Book
                </h3>
                <p>
                  This comprehensive deal book is designed to provide detailed information by identifying and mapping investment opportunities available in Agriculture sector of the economy with the aim of showcasing them, serving as a guide that simplifies the process of private sector involvement in projects and/or partnership with the Lagos State government.
                  Aims to eliminate all forms of poverty everywhere, highlights the disproportionate effects of climate change on impoverished and marginalised communities, and calls for sound policy framework to support accelerated poverty eradication actions.
                </p>

                <a href="/Agriculture-Deal-Book-Optimized.pdf" class="float-right" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      <div class="pr-3" style="color: white">
                        Download
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos State Government Affordable Housing Deal Book
                </h3>
                <p>
                  This comprehensive deal book is designed to provide detailed information by identifying and mapping investment opportunities available in Housing sector of the economy with the aim of showcasing them, serving as a guide that simplifies the process of private sector involvement in projects and/or partnership with the Lagos State government.
                </p>

                <a href="/Lagos-Global-Housing-Deal-Book-optimized.pdf" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img2.jpg" class="w-100 h-100">
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img3.jpg" class="w-100 h-100">
              </div>
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos State Government Oil and Gas Deal Book
                </h3>
                <p>
                  This comprehensive deal book is designed to provide detailed information by identifying and mapping investment opportunities available in Oil & Gas sector of the economy with the aim of showcasing them, serving as a guide that simplifies the process of private sector involvement in projects and/or partnership with the Lagos State government.
                </p>
                <a href="/LASG-DEAL-BOOK-Oil-and-Gas-optimized.pdf" class="float-right" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos State Government Transportation Deal Book
                </h3>
                <p>
                  This comprehensive deal book is designed to provide detailed information by identifying and mapping investment opportunities available in Transport sectors of the economy with the aim of showcasing them, serving as a guide that simplifies the process of private sector involvement in projects and/or partnership with the Lagos State government.
                </p>

                <a href="/Transport-Deal-Book-optimized.pdf" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img4.jpg" class="w-100 h-100">
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img5.jpg" class="w-100 h-100">
              </div>
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos State Government Power Deal Book
                </h3>
                <p>
                  This comprehensive deal book is designed to provide detailed information by identifying and mapping investment opportunities available in Power sector of the economy with the aim of showcasing them, serving as a guide that simplifies the process of private sector involvement in projects and/or partnership with the Lagos State government.
                </p>
                <a href="/LASG-DEAL-BOOK-Power-optimized.pdf" class="float-right">
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos E-Brochure
                </h3>
                <p>
                  <span class="font-weight-bold">Africa’s Fastest Growing Global City</span> <br>
                  Lagos Global e-brochure is an informative document with illustrative details, primarily introducing the Office of Overseas Affairs & Investment and the various services it renders, to inform prospective investors or members of the public. It also contains investment opportunities available in the different sectors of the economy in Lagos State.
                </p>

                <div>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img6.png" class="w-100 h-100">
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img7.jpg" class="w-100 h-100">
              </div>
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos: A City of Opportunities
                </h3>
                <p>
                  <span class="font-weight-bold">An Investor’s Guide</span> <br>
                  This comprehensive guide designed to provide you with an accurate overview of Lagos. You will get a good understanding of how Lagos is uniquely positioned within Nigeria and the African continent and the opportunities available to any interested investor.
                </p>
                <div class="float-right">
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Proposal Guideline Template
                </h3>
                <p>
                  <span class="font-weight-bold">
                    OAI Proposal Guideline Template
                  </span>  <br>
                  This document provides a proposal guide for developing an initial proposal (for concept approval) to be submitted to the Office of Overseas Affairs and Investment (Lagos Global).
                </p>

                <div>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 p-0" style="border: 1px solid lightslategrey">
                <img src="~/assets/images/r-img8.png" class="w-100 h-100">
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-4 p-0">
                <img src="~/assets/images/r-img6.png" class="w-100 h-100" style="object-fit: cover;">
              </div>
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Lagos state Business Enabling Reform Action Plan Report
                </h3>
                <p style="font-size:13px;">
                  <span class="font-weight-bold" style="font-size:14px;">Date of upload : 31-01-2023</span> <br>
                  To improve the competitiveness of Lagos State and ensure its continued attractiveness as the premier target destination for investments in Nigeria, Lagos State has defined specific actions its for the Lagos Business Enabling Reforms Action Plan (LAGBERAP) 2023-2024.
                  <br>
                  The LAGBERAP 2023-2024 builds on the private sector consultation carried out in October – December, 2022 as well as the objectives , successes and lessons of the Lagos State Development Plan and THEMES governance agenda which all form the foundation for the action plan for the state.
                  <br>
                  The expected impact of these reforms include (but is not limited to) greatly easing doing business and investing in the state, institutionalising the process for investor engagement and obtaining feedback, improving transparency on key processes and costs, increasing efficiency and ease of access in the delivery of government services and ensuring a pro-actively progressive policy environment. There is also a deliberate focus for ensuring doing business will be easier for micro, small and medium-scale enterprises (MSMEs).
                </p>

                <a href="/Lagos-State-Action-Business-Enabling-Reforms-Program-Submission-January-2023.xlsx" class="float-right mb-3" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      <div class="pr-3" style="color: white">
                        Download
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="row bg-white mt-5" style="box-shadow: 0 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-8 px-5 py-2">
                <h3 style="color: #063252;">
                  Investment Incentives for Investors MSMEs Operators in Lagos State
                </h3>
                <p></p>

                <a href="/INVESTMENT-INCENTIVES-FOR-INVESTORS-MSMEs-OPERATORS-IN-LAGOS-STATE-submitted.xlsx" class="float-left mt-5" download>
                  <div class="d-flex align-items-center" style="width: fit-content; border-radius: 5px;background-color: #0C7B3F">
                    <div
                      class="d-flex align-items-center justify-content-center download-icon"
                    >
                      <img src="~/assets/images/download-icon.png" class="text-white">
                    </div>
                    <div class="pr-3" style="color: white">
                      Download
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4 p-0" style="border: 1px solid lightslategrey">
                <img src="~/assets/images/r-img6.png" class="w-100 h-100">
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
import Header from '../../../Header'
import Footer from '../../../Footer.vue'
import SearchPopup from '../../../SearchPopup'
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
      backgroundUrl4
    }
  }
}
</script>

<style>

</style>
