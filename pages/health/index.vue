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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;background-size: 100% 100%;" :style="{ backgroundImage: `url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city text-uppercase health-mt">
                Health
              </div>
              <div
                class="mt-3 env-banner-text"
              >
                Lagos state has the highest number of uptake in Nigeria. <br>
                The Health sector is a critical area which can foster economic growth <br> and development through generation of revenue to the government, considering <br> the volume of funds used in seeking healthcare outside the country
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="health-header text-center mb-5">
              Recent Developments
            </div>
            <div class="row d-flex align-items-center justify-content-sm-center download-padding">
              <div class="col-sm-3 p-5 health-body" :style="{ backgroundImage: `url(${backgroundUrl4})` }">
                Assent of the health insurance bill which mandates the scheme for all residents in both formal and informal sectors in the state
              </div>
              <div class="col-sm-3 p-5 health-body offset-sm-1 graph-margin" :style="{ backgroundImage: `url(${backgroundUrl5})` }">
                The State Government encourages the improvement and development of medical facilities such as medical parks
              </div>
              <div class="col-sm-3 p-5 health-body offset-sm-1 graph-margin" :style="{ backgroundImage: `url(${backgroundUrl6})` }">
                Government has entered into agreement with Consortium of private investors for the establishment of a Medical Park.
              </div>
              <div class="row mt-5 pt-5 d-flex justify-content-center download-padding">
                <div class="health-header3 col-sm-4 p-5 health-body text-dark d-flex align-items-center justify-content-center" style="background-repeat: no-repeat;background-position: bottom left;" :style="{ backgroundImage: `url(${backgroundUrl3})`}">
                  The Public-Private Partnerships  Projects currently operating successfully in the health sector include the following;
                </div>
                <div class="col-sm-3 health-body text-dark offset-sm-1 p-0">
                  <div class="p-3" style="background: rgba(24, 143, 210, 0.1)">
                    <div class="pt-0 mb-1" style="height: 18px;width: 18px; border-radius: 50%;background-color: white" />
                    <div class="health-header2 mb-2">
                      Public-private Partnership arrangement for healthcare:
                    </div>
                    <p>
                      There are opportunities for PPP in several of the healthcare service delivery in the State such as provision of Laboratory Services, Radio diagnostic and Therapeutic Services
                    </p>
                  </div>
                  <div class="p-3 mt-2" style="background: rgba(24, 143, 210, 0.1)">
                    <div class="pt-0 mb-1" style="height: 18px;width: 18px; border-radius: 50%;background-color: white" />
                    <div class="health-header2">
                      Blood Screening services
                    </div>
                  </div>
                  <div class="p-3 mt-2" style="background: rgba(24, 143, 210, 0.1)">
                    <div class="pt-0 mb-1" style="height: 18px;width: 18px; border-radius: 50%;background-color: white" />
                    <div class="health-header2">
                      Pharmacy Services at some General Hospitals in the State
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 health-body text-dark ml-sm-4 p-0 graph-margin">
                  <div class="p-3" style="background: rgba(24, 143, 210, 0.1)">
                    <div class="pt-0 mb-1" style="height: 18px;width: 18px; border-radius: 50%;background-color: white" />
                    <div class="health-header2 mb-2">
                      Mortuary Services:
                    </div>
                    <p>
                      There are 3 private mortuary providers currently operating in 5 General Hospitals in the State
                    </p>
                  </div>
                  <div class="p-3 mt-2" style="background: rgba(24, 143, 210, 0.1)">
                    <div class="pt-0 mb-1" style="height: 18px;width: 18px; border-radius: 50%;background-color: white" />
                    <div class="health-header2 mb-2">
                      Healthcare Facility Management:
                    </div>
                    <p>
                      The management of the Infrastructures in the health facilities in terms of cleaning services and equipment maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="health-header text-center mb-5 pb-3">
              Investing Opportunities in Health
            </div>
            <div class="row health-card download-padding">
              <div class="col-sm-6 d-flex p-0">
                <img src="~/assets/images/health300.png">
              </div>
              <div class="col-sm-6 py-5">
                <div class="health-header4 mb-4">
                  Clinical Services
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Intramural practice
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Management of Human resource for health
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Restorative and rehabilitation (e.g Physiotherapy etc)
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Primary health care
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Contracting not-for- profit organizations
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Provision of healthcare services in under-served and rural areas
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Prevention and treatment for certain priority diseases such as tuberculosis, malaria, HIV/AIDS
                  </div>
                </div>
              </div>
            </div>
            <div class="row health-card mt-5 flex-column-reverse flex-sm-row download-padding">
              <div class="col-sm-6 py-5 pl-5">
                <div class="health-header4 mb-4">
                  Non-Clinical Support Services
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Ambulance services
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Mortuaries
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Security
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Laundry
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Maintenance of clinical equipment
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Amenity wards
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Catering
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Cleaning/Ground Maintenance (Domestic)
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Ambulance
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Engineering Maintenance including Power, water supply
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Telephone/Intercom
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Record Keeping
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Revenue Collection ( including by banking sector)
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Management of health facilities
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Information technology and technology transfer
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex justify-content-end p-0">
                <img src="~/assets/images/health301.png">
              </div>
            </div>
            <div class="row health-card mt-5 download-padding">
              <div class="col-sm-6 d-flex p-0">
                <img src="~/assets/images/health302.png">
              </div>
              <div class="col-sm-6 py-5">
                <div class="health-header4 mb-4">
                  Health Promotion and Advocacy
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Raising awareness about health consumer rights,
                    Contracting NGOs for community mobilization and outreach
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Using mass media - to disseminate essential health facts, and serve as a means of information exchange and dialogue
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Promoting quality recognition
                  </div>
                </div>
              </div>
            </div>
            <div class="row health-card mt-5 flex-column-reverse flex-sm-row download-padding">
              <div class="col-sm-6 py-5 pl-5">
                <div class="health-header4 mb-4">
                  Supportive Clinical Services
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Diagnostics (Radiology, Laboratory)
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Training (for all professional cadres)
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Franchising of components services
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <div style="width: 20px; height: 20px">
                    <img src="~/assets/images/piont.png" style="width: 10px; height: 10px">
                  </div>
                  <div class="ml-2 health-body2">
                    Build operate and transfer (BOT) options
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex justify-content-end p-0">
                <img src="~/assets/images/health303.png">
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
import backgroundUrl from '~/assets/images/background/health30.png'
import backgroundUrl2 from '~/assets/images/background/health-bi2.png'
import backgroundUrl3 from '~/assets/images/background/health-icon-bi.png'
import backgroundUrl4 from '~/assets/images/background/health40.png'
import backgroundUrl5 from '~/assets/images/background/health41.png'
import backgroundUrl6 from '~/assets/images/background/health42.png'

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
      backgroundUrl5,
      backgroundUrl6
    }
  }
}
</script>

<style>

</style>
