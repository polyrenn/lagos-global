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
          <div class="dashboard-inner" style="height: 400px;background-size: 100% 100%;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 53, 9, 0.7) -9.68%, rgba(7, 53, 9, 0.7) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center flex-column">
              <div class="w-100 text-center africa-global-city text-uppercase">
                Agriculture
              </div>
              <div class="mt-3 env-banner-text">
                These investment opportunities will be given an enabling <br> environment for the business to thrive in the state.
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
              <div class="col-sm-3 d-flex align-items-center justify-content-center flex-column">
                <div
                  class="d-flex align-items-center justify-content-center agric-icon"
                >
                  <img src="~/assets/images/fish.png">
                </div>
                <div class="icon-title mt-3">
                  Fisheries
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center flex-column justify-content-center startup-margin">
                <div
                  class="d-flex align-items-center justify-content-center agric-icon"
                >
                  <img src="~/assets/images/chicken.png">
                </div>
                <div class="icon-title mt-3">
                  pigs
                </div>
              </div>
              <div class="col-sm-3 flex-column d-flex align-items-center justify-content-center startup-margin">
                <div
                  class="d-flex align-items-center justify-content-center agric-icon"
                >
                  <img src="~/assets/images/pig.png">
                </div>
                <div class="icon-title mt-3">
                  Poultry
                </div>
              </div>
              <div class="col-sm-3 flex-column d-flex align-items-center justify-content-center startup-margin">
                <div
                  class="d-flex align-items-center justify-content-center agric-icon"
                >
                  <img src="~/assets/images/rice.png">
                </div>
                <div class="icon-title mt-3">
                  Rice Production
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section" style="background-size: 100% 100%;" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-2 d-flex align-items-center justify-content-center">
                <div
                  class="d-flex align-items-center justify-content-center agric-icon bg-white border-0"
                >
                  <img src="~/assets/images/fish.png" class="text-white">
                </div>
              </div>
              <div class="col-sm-2 fish-header text-center">
                Fisheries <br> Investment
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-sm-4">
                <div class="px-5 pt-5 fish-body agric-border">
                  <div class="font-weight-bold">
                    Aquaculture
                  </div>

                  <div class="py-2">
                    A. Fish Feed Production
                  </div>
                  <div class="py-2">
                    B. Fish fingerlings Production
                  </div>
                  <div class="py-2">
                    C. Table Size Production
                  </div>
                  <div class="py-2">
                    D. Brood stock Production
                  </div>
                  <div class="py-2">
                    E. Fish farming equipment and  Infrastructure
                  </div>
                  <div class="py-2">
                    F. Fish processing equipment and In frastructure
                  </div>
                  <div class="py-2">
                    G. Establishment of Fisheries
                    research, training and consultancy
                  </div>
                  <div class="py-2">
                    H. Fish pond Construction
                  </div>
                  <div class="py-2">
                    I. Fish Farm Est at es development
                  </div>
                  <div class="py-2">
                    J. Cage and Pen Culture
                  </div>
                  <div class="py-2">
                    K. Mari culture
                  </div>

                  <div class="py-2">
                    L. Fish Processing e.g. Fish smoking,
                    filleting, canning
                  </div>
                  <div class="py-2">
                    M. Shell fish culture
                  </div>
                  <div class="py-2">
                    N. Culture of aquatic plant s of
                    commercial importance
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="px-5 pt-5 fish-body agric-border">
                  <div class="font-weight-bold">
                    Capture Fisheries
                  </div>
                  <div class="py-2">
                    A. Outboard Engine Production, servicing and marketing
                  </div>
                  <div class="py-2">
                    B. Fishing terminals, infrastructure and equipment
                  </div>
                  <div class="py-2">
                    C. Marine Industrial Fishing
                  </div>
                  <div class="py-2">
                    D. Fish boats Construction (Leasing and Selling)
                  </div>
                  <div class="py-2">
                    E. Fishing Nets Production and Marketing
                  </div>
                  <div class="py-2">
                    F. Fishing boat accessories e.g. Live jackets, navigational instruments and servicing equipment
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="px-5 pt-5 fish-body">
                  <div class="font-weight-bold">
                    Ancillary Services
                  </div>
                  <div class="py-2">
                    A. Fish eateries and restaurant
                  </div>
                  <div class="py-2">
                    B. Fish amusement parks, holiday centre and ecotourism
                  </div>
                  <div class="py-2">
                    C. Fish transportation and trading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section" style="background-repeat: no-repeat;  background-position: 100% 100%;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(255, 255, 255, 0.9) -9.68%, rgba(255, 255, 255, 0.9) 59.8%),url(${backgroundUrl3})` }">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-6 px-5">
                <div class="row">
                  <div class="col-sm-4 d-flex align-items-center justify-content-center">
                    <div
                      class="d-flex align-items-center justify-content-center agric-icon border-0 text-white"
                      style="width: 121.03px;
                          height: 121.03px;
                          background-color: #0C7B3F"
                    >
                      <img src="~/assets/images/pig-white.png">
                    </div>
                  </div>
                  <div class="col-sm-8 pig-invest-heading p-0">
                    Pig <br> Investment
                  </div>
                </div>
                <div class="pig-invest-body mt-5">
                  <p>
                    Pig farming is fast becoming a popular business in Nigeria and Lagos state in particular. Although growth and development of pig farming has faced its challenges due to religious and tribal beliefs however due to metropolitan nature of Lagos, which is spreading fast to ot he r state many opportunities abound for pig farming.
                  </p>
                  <p>
                    Pigs are hardy creatures and are able to withstand rough environments. They also have fast gestation period and can have over six off springs per litter. This fact makes them a good source of protein for consumers and income for farmers. One sow can have up to three separate gestation periods a year
                    with 8 off springs per gestation period and a total of
                    24 piglets per year. One boar can serve 10-15sows.
                  </p>
                </div>
                <a
                  href="/Direct-cost-analysis-annually-converted.pdf"
                  download
                  class="p-2 text-white font-weight-bold d-flex align-items-center justify-content-center"
                  style="width: fit-content;
                        background: #0C7B3F;
                        border-radius: 5px;"
                >
                  Download Direct Cost Analysis <span class="bg-danger d-flex align-items-center justify-content-center ml-2" style="width: 17.81px;height: 17.81px;border-radius: 50%; cursor: pointer"> <img src="~/assets/images/download-icon.png" class="text-white"></span>
                </a>
              </div>
              <div class="col-sm-6 px-5">
                <img src="~/assets/images/pig-img.png">
              </div>
            </div>
          </div>
        </section>

        <section class="about-section" style="background-repeat: no-repeat;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(243, 255, 246, 0.9) -9.68%, rgba(243, 255, 246, 0.9) 59.8%),url(${backgroundUrl4})` }">
          <div class="auto-container">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div
                class="d-flex align-items-center justify-content-center agric-icon border-0"
                style="height: 83px;width: 83px;background-color: #0C7B3F"
              >
                <img src="~/assets/images/chicken-white.png" class="text-white">
              </div>
              <div class="chicken-heading p-2 text-center">
                Poultry Investment
              </div>
              <div class="chicken-body p-2">
                At the moment there exists a huge market potential for chicken and poultry products in Nigeria given the high rising population. Out of the needed annual 200 million birds to meet demands, only about 140 million birds are produced annually, creating a huge gap of over 60 million birds annually.
              </div>
            </div>
            <div class="row chicken-body2 mt-5">
              <div class="col-sm-6">
                <img src="~/assets/images/chicken-meat.png" class="text-white">
              </div>
              <div class="col-sm-6">
                <div class="font-weight-bold">
                  Red Meat Value: Feedlot System
                </div>
                <div>
                  The intention of this project is to establish a Feedlot Estate on 160Ha of land an expanse of land ( 160 Ha) at lmota lkorodu, Infrastructure - water, accessible roads, electricity, cooperative society organization, assess to soft agricultural loans etc.
                </div>
              </div>
            </div>
            <div class="row chicken-body2">
              <div class="col-sm-6">
                <div class="font-weight-bold mt-5">
                  Eggs, Spent Layer, Broiler Birds
                </div>
                <div>
                  The ban on imported poultry products has led to a steady growth in the production of poultry   products in the country, but with a population of over 170million people demand still outweighs supply, thus poultry production will continue to be a viable market.
                </div>
              </div>
              <div class="col-sm-6">
                <img src="~/assets/images/chicken-egg.png" class="text-white">
              </div>
            </div>
            <div class="row align-items-center justify-content-center d-flex mt-5 download-padding">
              <div class="col-sm-4 d-flex align-items-center p-0">
                <a href="/Mechanism-and-process-converted.pdf" download class="bg-white d-flex align-items-center" style="width: fit-content; border-radius: 5px 0px 0px 5px;">
                  <div
                    class="d-flex align-items-center justify-content-center download-icon"
                  >
                    <img src="~/assets/images/download-icon.png" class="text-white">
                  </div>
                  <div class="ml-3 pr-3" style="color: #0C7B3F">
                    Download Mechanism & Process
                  </div>
                </a>
              </div>
              <div class="col-sm-4 d-flex align-items-center justify-content-sm-center p-0 graph-margin">
                <a href="/Revenue-cost-for-1000boiler-birds-converted.pdf" download class="bg-white d-flex align-items-center" style="width: fit-content; border-radius: 5px 0px 0px 5px;">
                  <div
                    class="d-flex align-items-center justify-content-center download-icon"
                  >
                    <img src="~/assets/images/download-icon.png" class="text-white">
                  </div>
                  <div class="ml-3 pr-3" style="color: #0C7B3F">
                    Download Revenue/Cost for 1000 Broiler Birds
                  </div>
                </a>
              </div>
              <div class="col-sm-4 d-flex align-items-center justify-content-sm-end p-0 graph-margin">
                <a href="/Revenue-cost-for-1000laying-birds-converted.pdf" download class="bg-white d-flex align-items-center" style="width: fit-content; border-radius: 5px 0px 0px 5px;">
                  <div
                    class="d-flex align-items-center justify-content-center download-icon"
                  >
                    <img src="~/assets/images/download-icon.png" class="text-white">
                  </div>
                  <div class="ml-3 pr-3" style="color: #0C7B3F">
                    Download Revenue/Cost for 1000 Laying Birds
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section" style="background-repeat: no-repeat;  background-position: 100% 100%;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(255, 255, 255, 0.9) -9.68%, rgba(255, 255, 255, 0.9) 59.8%),url(${backgroundUrl5})` }">
          <div class="auto-container">
            <div class="d-flex align-items-center justify-content-center flex-column">
              <div
                class="d-flex align-items-center justify-content-center agric-icon border-0"
                style="height: 83px;width: 83px;background-color: #0C7B3F"
              >
                <img src="~/assets/images/rice-white.png" class="text-white">
              </div>
              <div class="chicken-heading p-2 text-center">
                Rice Production
              </div>
              <div class="chicken-body p-2">
                <p>
                  Rice is one of the foods with the most economic importance in the world today. The FAO has reported that better management of rice processing and resulting by-products into more sustainable applicat ions would be beneficial for a variety ofreasons. Rice processing involves several milling stages to produce
                </p>
                <p>
                  EDIBLE RICE as final product. As crude rice goes through the milling process, by-products are generated such as rice brown that have been shown to exhibit beneficial impact on human and animal nutrition, husk and broken rice of various sizes.
                  The lmota Rice Mill will without doubt generate a lot of byproducts that can be used for several other useful product s, thereby leading to setting up of many complementary businesses, in the rice processing value chain, such as:
                </p>
              </div>
            </div>
            <VueSlickCarousel v-bind="settings" class="slick-slide mt-5">
              <div class="carousel-body">
                <div class="carousel-card" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(141, 141, 141, 0.1) -9.68%, rgba(141, 141, 141, 0.1) 59.8%),url(${backgroundUrl6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }">
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    BRIQUETTE PRODUCING COMPANIES
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      A Briquette is a black of flammable material used as a fuel to start and maintain a fire.
                    </p>
                    <p>
                      They are produced from saw dust or RICE HUSK, solid and cylindrical in shape.
                    </p>
                    <p>
                      It makes available a affordable cooking energy substitute to consumers that can be easily accessed.
                    </p>
                    <p>
                      Briquettes can be used as cooking fuel in hotels, boarding school hostel, eatery and factories where boilers are used.
                    </p>
                    <p>
                      This will also reduce deforestation in the state by the activities of those looking for fire wood and reduce emission of greenhouse gas (GHG) to the atmosphere.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-body">
                <div class="carousel-card" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(141, 141, 141, 0.1) -9.68%, rgba(141, 141, 141, 0.1) 59.8%),url(${backgroundUrl6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }">
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    RICE FLOUR FACTORIES
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      The Rice Factory will generated broken rice of various sizes
                      and those producing ground rice will use it to produce rice flour for their consumers
                    </p>
                  </div>
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    RICE FLAKES/CRIPSIES FACTORIES
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      Factories for production of breakfast foods and snacks
                      could be among those to be considered
                    </p>
                  </div>
                </div>
              </div>
              <!--              <div class="carousel-card">-->
              <!--                <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">-->
              <!--                  RICE FLAKES/CRIPSIES FACTORIES-->
              <!--                </div>-->
              <!--                <div class="carousal-card-heading px-5 py-2">-->
              <!--                  <p>-->
              <!--                    Factories for production of breakfast foods and snacks-->
              <!--                    could be among those to be considered-->
              <!--                  </p>-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="carousel-body">
                <div class="carousel-card" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(141, 141, 141, 0.1) -9.68%, rgba(141, 141, 141, 0.1) 59.8%),url(${backgroundUrl6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }">
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    SACK MANUFACTURING FACTORY
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      Bag/Sack manufacture as practiced by Flour Mills Apapa.
                      A sack factory is recommended to be located in the complex to bring the sack manufacture close by.
                    </p>
                  </div>
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    RICE HUSK BAGGING FACILITY
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      Some of the nearby buildings could be used for bagging/storing
                      excess rice husk before evacuation from the factory area.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-body">
                <div class="carousel-card" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(141, 141, 141, 0.1) -9.68%, rgba(141, 141, 141, 0.1) 59.8%),url(${backgroundUrl6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }">
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    PRODUCTION OF ACTIVATED CARBON
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      This is another source of usage for the excess rice husks
                    </p>
                  </div>
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    RICE BRAN OIL
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      Companies that can extract oil from rice bran could be set up in one of the ancillary buildings.
                    </p>
                    <p>
                      Bran oil is used for cooking and waxes for cosmetic products
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-body">
                <div class="carousel-card" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(141, 141, 141, 0.1) -9.68%, rgba(141, 141, 141, 0.1) 59.8%),url(${backgroundUrl6})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }">
                  <div class="carousal-card-heading font-weight-bold px-5 pt-5 pb-3">
                    HAULAGE AND TRANSPORTATION SERVIVES
                  </div>
                  <div class="carousal-card-heading px-5 py-2">
                    <p>
                      Goods and products produced often need to be transported from
                      the farmer to the consumer,
                    </p>
                    <p>
                      therefore create a huge need and opportunity for investment in
                      Haulage and transportation.
                    </p>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
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
// import { Carousel, Slide } from 'vue-carousel'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
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
import backgroundUrl from '~/assets/images/background/agric-bi.png'
import backgroundUrl2 from '~/assets/images/background/agric-fish-bi.png'
import backgroundUrl3 from '~/assets/images/background/pig-invest-bi.png'
import backgroundUrl4 from '~/assets/images/background/chicken-invest-bi.png'
import backgroundUrl5 from '~/assets/images/background/rice-bi.png'
import backgroundUrl6 from '~/assets/images/background/rice-bi-30.png'

export default {
  components: {
    ScrollTop,
    Header,
    SearchPopup,
    Footer,
    VueSlickCarousel
    // Carousel,
    // Slide
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
      backgroundUrl6,
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 6000,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              // initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
