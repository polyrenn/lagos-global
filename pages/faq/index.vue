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
                FAQ
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>
        <section style="background-color: #FCFFFA;padding-top: 50px;margin-top: 50px;padding-bottom: 100px">
          <div class="auto-container">
            <div class="env-heading2 mb-5 text-center" style="color: black">
              Frequently asked question
            </div>
            <div id="accordion">
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingTwo" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed env-heading5 d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      style="text-decoration: none"
                    >
                      Is Lagos the right place to invest?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      Yes, Lagos is the economic, financial and commercial nerve centre of Nigeria
                      It has 3 ports namely, Apapa, Tincan Island and Roro-terminal port
                      The location of Nigeria’s busiest international/Regional aviation hub i.e Murtala Muhammed International Airport
                      Lagos is located in the South Western part of Nigeria, on the narrow plin of the Bight of Benin and is bounded by the Atlantic Ocean. All these economic attributes and natural endowment positions lagos as the ‘THE PREFERRED INVESTMENT DESTINATION’
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingThree" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed env-heading5 d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style="text-decoration: none"
                    >
                      What is the Lagos State Government doing to attract FDI?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      As part of Lagos State Government’s effort to compliment the attraction of Foreign Direct Investment into its region, the following are being provided as incentives;
                      Establishment of the Office of Overseas Affairs and Investment saddle with the responsibility of promoting investment
                      Establishment of Lekki Free Trade Zone: This serve as an enabling environment for the promotion and location of refineries for intending investors
                      Establishment of Enterprise Zones: To serve as an incubating facility for foreign investors. These zones are located across the state namely: Ijanikin, Ibeju lekki and Ikorodu.
                    </p>
                    <p>
                      Construction of Light - Rail system for easy transportation of Cargo
                      The lagos State Government under the present administration has embarked on Trade Missions with Embassies, High Commissions and Consular offices to foster stronger bi-lateral relationships
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingFour" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      style="text-decoration: none"
                    >
                      Which sectors of the Lagos Economy is open to me as an investor?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      These sectors are open to investors:
                    </p>
                    <p>POWER,</p>
                    <p>AGRICULTURE,</p>
                    <p>TRANSPORTATION,</p>
                    <p>HOUSING,</p>
                    <p>HEALTH,</p>
                    <p>TOURISM,</p>
                    <p>INFORMATION AND COMMUNICATION TECHNOLOGY</p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingFive" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      style="text-decoration: none"
                    >
                      Which Office is responsible for foreign investment promotion in Lagos State?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The Office of Overseas Affairs and Investment (LAGOS GLOBAL)
                    </p>
                    <p>
                      Email: overseas.affairs@lasg.gov.ng
                    </p>
                    <p>
                      Website: www.lagosglobal
                    </p>
                    <p>
                      Tel no: 09080000023 and 09080000024
                    </p>
                    <p>
                      It is expected among others to;
                    </p>
                    <p>
                      Initiate, formulate and evaluate policies relating to the promotion of inward and outward investments in Lagos State

                      Act as one-stop shop for prospective investors intending to invest in Lagos state
                    </p>
                    <p>
                      Identify and promote genuine and specific foreign direct investment into Lagos Economy
                    </p>
                    <p>
                      Promote export of goods and services to other parts of the world
                    </p>
                    <p>
                      Liaise with embassies and high commissions, chambers of commerce to facilitate foregn investment in Lagos
                    </p>
                    <p>
                      Enhance the global perception of Lagos as a place to conduct business and live in
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingSix" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                      style="text-decoration: none"
                    >
                      As a new investor, how do I obtain first-hand information about investing in Lagos?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      Investment desk is situated at major points of entry and strategic public locations across the state
                      Through the email and website (overseasaffairs@lasg.gov.ng, www.lagosglobal.com )
                    </p>
                    <p>
                      Direct telephone lines (+234)09080000023 and 09080000024)
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingSeven" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                      style="text-decoration: none"
                    >
                      How can lives and properties of investors be secured by the Lagos State Government?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The state Government has ensured continuous provision of security equipment and personnel to the Lagos State Police Command such as patrol vehicles and other securities too curtail crime in the state.
                    </p>
                    <p>
                      The Lagos State Security Trust Fund (LSSTF) was given a boost to eradicate crime and ensure security of lives and properties of investors and its entire citizenry
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingEight" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                      style="text-decoration: none"
                    >
                      How do I find the right man-power for my business?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      Lagos has over 20MILLION people with an available workforce of x% (skilled and unskilled) which stands as an opportunity for investors to access the labour market.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingNine" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                      style="text-decoration: none"
                    >
                      Which Government Agencies do the Office of Overseas Affairs and Investment work with to foster Non-oil exportation?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The office of Overseas Affairs and Investment liaise with Lagos State Ministry of Information, Ministry of Commerce, Industry and Cooperatives, Ministry of Agriculture and Nigeria Export Promotion Council.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingTen" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                      style="text-decoration: none"
                    >
                      How can I export my products overseas?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The office of Overseas affairs and Investment will liaise with relevant Government Agencies like the Nigerian Export Promotion Council (NEPC), STANDARD ORGANISATION OF Nigeria (SON) and National Agency for Food and Drug Administration Council (NAFDAC) to assist with the process.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingEleven" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                      style="text-decoration: none"
                    >
                      What is being put in place to improve the Investment climate of Lagos?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      We are modifying regulations and policies such as Tax moderation, fast tracking access to Land documentation etc. to drive in Foriegn Direct Investment into the state.
                    </p>
                    <p>
                      The Office of Overseas Affairs and Investment act as a ‘business ombudsman’ - helping investors and the local business community navigate Government Bureaucracy.
                    </p>
                    <p>
                      The State Government is currently investing massive infrastructure programme like the light rail system and Independent Power project (IPP)
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingTwelve" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                      style="text-decoration: none"
                    >
                      How can i as an investor loan and financial advice as regards exports?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The Office of overseas Affairs  and investment shall liaise with relevant Government Agencies like Bank of Industry (BOI) and Nigerian Export and Import Bank (NEXIM) TO GIVE FINANCIAL ADVICES TO WELL MEANING INVESTORS .
                    </p>
                  </div>
                </div>
              </div>
              <div class="card" style="background-color: #FCFFFA">
                <div id="headingThirteen" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading5 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                      style="text-decoration: none"
                    >
                      How can I be assisted in situating a factory site?
                      <i class="fas fa-plus" />
                    </button>
                  </h5>
                </div>
                <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
                  <div class="card-body">
                    <p>
                      The  Office of Overseas Affairs and Investment will liaise with the regulatory agencies like the Ministry of Physical Planning and Urban Development, Lagos State Urban Renewal Authority and Land’s Bureau to assist Investors with factory sites.
                    </p>
                  </div>
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
import backgroundUrl from '~/assets/images/background/about-bi.jpg'
import backgroundUrl2 from '~/assets/images/background/env-bi2.png'

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
