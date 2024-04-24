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
                tourism
              </div>
              <!--              <div-->
              <!--                class="mt-3"-->
              <!--                style="font-style: normal;-->
              <!--                       font-weight: normal;-->
              <!--                       font-size: 32px;-->
              <!--                      line-height: 153%;-->
              <!--                      text-align: center;-->
              <!--                      color: #FFFFFF;"-->
              <!--              >-->
              <!--                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <br> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
              <!--              </div>-->
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: #FFFDFA">
          <div class="auto-container tour-body1">
            <div class="row tour-header1 mb-5 ml-3 pb-3">
              Lagos State from the beginning
            </div>
            <div class="row flex-column-reverse flex-sm-row">
              <div class="col-sm-6 px-5">
                <p class="tour-body1">
                  According to the State's official website, Lagos State was created on May 27, 1967 by virtue of States [Creation and Transitional Provisions] Decree No. 14 of 1967 which restructured Nigeria's Federat io n into 12 States. Prior to this, Lagos Municipality was administered as a Federal Territory by the Federal Government through the Federal Ministry of Lagos Affairs as the regional authority, while the Lagos City Council governed the City of Lagos. Equally, the Metropolitan areas [Colony Province] of lkeja. Agege, Mushin, Ojo, lkorodu, Epe, and Badagry were then administered by the Western Region Government.
                </p>
                <p class="tour-body1">
                  The State took off as an adm inist rat ive entity on April 11. 1968 with Lagos Island serving the dual role of being the State and Federal Capital respectively. However. with the creation of the Federal Capital Territory of Abuja in 1976, Lagos ceased to be the capital of the State, as t his was moved to lkeja.
                </p>
                <p class="tour-body1">
                  Similarly, with the formal relocation of the seat of the Federal Government to Abuja on 12th December, 1991, Lagos ceased to be Nigeria's political capit al. Nevertheless, Lagos remains the nation's economic and commercial capital. According to extant political records. "Lagos is to the people of Nigeria. what the head is to the body of an individual"
                </p>
              </div>
              <div class="col-sm-6">
                <img src="~/assets/images/tour-img1.png">
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container tour-body1">
            <div class="row">
              <div class="col-sm-6">
                <img src="~/assets/images/tour-img2.png">
              </div>
              <div class="col-sm-6 px-5">
                <div class="row tour-header1 mb-5">
                  Location and Extent
                </div>
                <p class="tour-body1">
                  The State is located on the South-Western part of Nigeria. on the narrow plain of the Bight of Benin. Lying approximately on longitude 20 42'E and 32 2'E respective ly,and between latitude 60 22'N and 60 2'N. Lagos State is bounded in the North and East by Ogun State of Nigeria, in the West by Republic of Benin, and stretches over 180 kilometers along the Guinea Coast of the Bight of Benin on the Atlantic Ocean.
                </p>
                <p class="tour-body1">
                  Its territorial extent and political jurisdiction encompasses the city of Lagos and the four administrative divisions of lkeja, lkorodu, Epe andBadagry collectively referred to as IBILE and covering an area of358.862 hectares or 3,577 sq. km. which represents 0.4% of Nigeria's territorial land mass of 923,773 sq. km
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #FFFDFA">
          <div class="auto-container tour-body1">
            <div class="row flex-column-reverse flex-sm-row">
              <div class="col-sm-6 px-5">
                <div class="row tour-header1 mb-5">
                  Climate
                </div>
                <p class="tour-body1">
                  The dominant vegetation of the State is the swamp forest of the fresh water and mangrove swamp forests, both of which are influenced by the double rainfall pattern of the state, which makes the environment a wetland reg i on . Generally, the State has two climatic seasons: Dry [November-March] and Wet [April-October].
                </p>
                <p class="tour-body1">
                  The drainage system of the State is characterized by a maze of lagoons and waterways, which constitutes about 22% or 787 sq. km. [75.755 hectares] of the State's territory. The major water bodies are the Lagos and Lekki Lagoons, Yewa, Ogun, Oshun, and Kweme Rivers. Others are Ologe Lagoon, Kuramo Waters, and Badagry, Five Cowries and Omu Creeks respectively
                </p>
              </div>
              <div class="col-sm-6">
                <img src="~/assets/images/tour-img3.png">
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container tour-body1">
            <div class="row">
              <div class="col-sm-6">
                <img src="~/assets/images/tour-img4.png">
              </div>
              <div class="col-sm-6 px-5">
                <div class="row tour-header1 mb-5">
                  Demography
                </div>
                <p class="tour-body1">
                  Lagos State is the smallest state in Nigeria yet. it has the highest urban population, which is 27.4 % of the national estimate [UN­ Habitat]. According to the 2006 National Censu s, Lagos State has a population of9,013,534 in relation to the National count of 1 40,00 3,5 4 2. However, based on the UN-Habitat and international development agencies' estimates, Lagos State is said to have about 24.6 million inhabitants in 2015.
                </p>
                <p class="tour-body1">
                  Of this population, Metropolitan Lagos accounts for over 85% on an area that is 37% of the land area of the State, and the fact that Lagos population is growing 10 times faster than that of New York and Los Angeles, and more than the population of 32 African nations combined, the State population is expected to hit the 35 miIlion mark in 2020
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #FFFDFA">
          <div class="auto-container tour-body1">
            <div class="row download-padding">
              <div class="tour-header1 mb-5 text-center w-100 download-padding">
                lagos state ministry of tourism, arts <br> & culture background
              </div>
              <div class="col-sm-6 px-sm-5">
                <p class="tour-body1">
                  The Ministry of Tourism was created as a burgeoning Department under the Ministry of Home Affairs in 1995 during the Military Administrationof Capt. Mike Akhighee.
                </p>
                <p class="tour-body1">
                  In 199 1 the Government of Sir Michael Otedola. removed the Tourism Department from the Ministry of Home Affairs and merged it with the Ministry of Information and Culture. It became known as the Bureau of Information. Culture & Tourism and was headed by a Permanent Secretary
                </p>
                <p class="tour-body1">
                  The transformation continued in 1994, when the Tourism Department was carved out from Bureau of Information, Culture and Tourism and merged with the Ministry of Commerce and Industry and it became known then as Ministry of Commerce . Industry and Tourism (MCIT) and was headed by a Commissioner. the relevance of the Ministry he Lagos State Tourism Board
                  was created out of the Tourism
                </p>
              </div>
              <div class="col-sm-6">
                <p class="tour-body1">
                  The dominant vegetation of the State is the swamp forest of the fresh water and mangrove swamp forests, both of which are influenced by the double rainfall pattern of the state, which makes the environment a wetland reg i on . Generally, the State has two climatic seasons: Dry [November-March] and Wet [April-October].
                </p>
                <p class="tour-body1">
                  The drainage system of the State is characterized by a maze of lagoons and waterways, which constitutes about 22% or 787 sq. km. [75.755 hectares] of the State's territory. The major water bodies are the Lagos and Lekki Lagoons, Yewa, Ogun, Oshun, and Kweme Rivers. Others are Ologe Lagoon, Kuramo Waters, and Badagry, Five Cowries and Omu Creeks respectively
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container tour-body1">
            <div class="row download-padding">
              <div class="tour-header1 mb-5 text-center w-100">
                Tourist attractions
              </div>
              <div class="tour-body1 text-center mb-5 download-padding">
                The city of Lagos is the place to be. The former capital of Nigeria and the country's largest economy  has a whole lot of tourists attractions. You'll be spoilt with the tonnes of recreational places in Lagos like beaches, resorts, museums, art centres, markets, malls and festivals you get to enjoy. There's an abundance of historical and cultural landmarks as well.
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center flex-column mt-5">
                <div class="d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img5.png" class="w-100">
                  <div class="p-2 tour-header2">
                    National Arts Theatre
                  </div>
                </div>
                <div class="mt-5 d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img6.png" class="w-100">
                  <div class="p-2 tour-header2">
                    Lagos Carnival
                  </div>
                </div>
                <div class="mt-5 d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img7.png" class="w-100">
                  <div class="p-2 tour-header2">
                    New Afrika Shrine
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center flex-column mt-5">
                <div class="d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img8.png" class="w-100">
                  <div class="p-2 tour-header2">
                    Lekki Conservation Center
                  </div>
                </div>
                <div class="mt-5 d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img9.png" class="w-100">
                  <div class="p-2 tour-header2">
                    Lagos Beach
                  </div>
                </div>
                <div class="mt-5 d-flex align-items-center justify-content-center flex-column" style="background: rgba(170, 138, 35, 0.8);width: 90%">
                  <img src="~/assets/images/tour-img10.png" class="w-100">
                  <div class="p-2 tour-header2">
                    Freedom Park, Lagos
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
import backgroundUrl from '~/assets/images/background/tour-bi1.png'
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
