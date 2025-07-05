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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;background-size: 100% 100%" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrl.value})` }">
            <div class="h-100 d-flex justify-content-center align-items-center">
              <div class="w-100 text-center africa-global-city text-uppercase">
                LAGOS THEMES <br> MEETS GLOBAL SDGs
              </div>
            </div>
          </div>
        </section>
        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: #FFFFFF">
          <div class="auto-container text-center p-5 w-100 rounded" style="background-color: #F4F4F4">
            <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="our-text pb-5 text-center">
              LAGOS THEMES MEETS GLOBAL SDGs
            </div>
            <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src="~/assets/images/lagos-theme.png" class="themes" alt="Lagos Themes">
            </div>
          </div>
        </section>

        <section style="background-color: #68a8da17; padding: 110px 0px 70px;">
          <div class="auto-container">
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="our-text pb-5 text-center w-100">
              SUSTAINABLE DEVELOPMENT GOALS
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-3" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #E8202D">
                <img src="~/assets/images/sdg-poverty.png" alt="SDG Poverty">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Aims to eliminate all forms of poverty everywhere, highlights the disproportionate effects of climate change on impoverished and marginalised communities, and calls for sound policy framework to support accelerated poverty eradication actions.
                </p>
                <p>
                  It addresses equality by requiring all nations to ensure both men and women have equal access to Economic resources, Basic services, Ownership of property and inheritance, Natural resources, New and appropriate technologies (esp. in information and communication), Financial services including microfinance.
                </p>
              </div>
            </div>

            <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex justify-content-center align-items-center" style="background-color: #D19F2E">
                <img src="~/assets/images/sdg-hunger.png" alt="SDG Hunger">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Challenges malnutrition, unsustainable agricultural practices, and systems that propagate unsustainable food production systems; calls for safe, nutritious, and sufficient food throughout all seasons for all persons (esp. in least developed countries).
                </p>
                <div>
                  <div>
                    <p>
                      In order to achieve Goal 2, agricultural productivity must double as well as the incomes of small scale farmers. Other targets that lie under this goal are:
                      <a
                        class="collapsed text-danger"
                        @click="toggleCollapse('hungerReadMore')"
                        href="javascript:void(0);"
                        role="button"
                        :aria-expanded="activeCollapses['hungerReadMore'] ? 'true' : 'false'"
                        aria-controls="collapseHunger"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                  <div v-show="activeCollapses['hungerReadMore']" id="collapseHunger">
                    <p>Elimination of wasting and stunting of children under 5 years of age</p>
                    <p>Increased secure and equal access to land.</p>
                    <p>Establishing diversified seed banks to preserve genetic diversity.</p>
                    <p>Efficient exchange of both modern and traditional farming practice knowledge.</p>
                    <p>Establishing financial services that market opportunities for value addition and non-farm employment.</p>
                    <p>Increasing and improving rural infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5 reverse" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  Tackles reducing the global mortality ratio and promotes well-being in all age groups. It calls for action in ending preventable deaths by increasing access to communicable disease vaccines and medicines (i.e. HIV/AIDS, malaria, TB etc.) and challenges health care sectors to eradicate non-communicable disease (cancers, diabetes, hypertension etc.) by a third, globally.
                </p>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #2B9B49">
                <img src="~/assets/images/sdg-health.png" alt="SDG Health">
              </div>
            </div>

            <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse  mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  Ensures inclusive, equitable, and quality education for girls and boys at all levels (as well as vocational and technical training institutions) so that they experience efficient outcomes and occupations to sustain life.
                </p>
                <div>
                  <div>
                    <p>
                      It also calls for elimination of disparities in gender, disability, and unequal access for those in vulnerable situations so that they too, can support themselves later in life.
                      <a
                        class="collapsed text-danger"
                        @click="toggleCollapse('educationReadMore')"
                        href="javascript:void(0);"
                        role="button"
                        :aria-expanded="activeCollapses['educationReadMore'] ? 'true' : 'false'"
                        aria-controls="collapseEducation"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                  <div v-show="activeCollapses['educationReadMore']" id="collapseEducation">
                    <p>It stresses importance of ensuring literacy and numeracy in both young and old populations and encourages the creation of an international curriculum that covers topics such as:</p>
                    <p>Sustainable development and lifestyles.</p>
                    <p>Human rights and gender equality</p>
                    <p>Promotion of peace and non-violence</p>
                    <p>Global citizenship</p>
                    <p>Appreciation for cultural diversity and its contribution to sustainable development</p>
                    <p>Finally, it calls for new and upgraded educational facilities that are child, disability, and gender sensitive and that promote safe, non-violent, inclusive and effective learning environments.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #C42738">
                <img src="~/assets/images/sdg-education.png" alt="SDG Education">
              </div>
            </div>

            <!-- Add similar Vue-based collapse logic for other sections -->

            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #ED432C">
                <img src="~/assets/images/sdg-gender.png" alt="SDG Gender">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  The purpose of this Goal is to achieve gender equality and empower all women and girls. This goal sets targets for women’s ability to fully participate and be provided with equal opportunities in leadership at all levels.
                </p>
                <p>
                  It also challenges society to recognize the value of unpaid care and domestic work through actions such as the provision of public services, better infrastructure, social protection policies, and the promotion of shared responsibilities. Mainly, the gender equality goal stresses the full eradication of not just discrimination, but violence against women in both the public and private sphere.
                </p>
              </div>
            </div>
             <!-- ... continue for all SDG sections, replacing data-toggle with @click and v-show ... -->
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

<script setup lang="ts">
import { ref, reactive } from 'vue';
// Auto-imported components: Header, Footer, SearchPopup, ScrollTop

// Image imports for use in script (e.g. if path is dynamic or needs processing by Vite)
import bgUrl from '~/assets/images/background/bcimage.png';

const backgroundUrl = ref(bgUrl);

// State for Bootstrap-like collapse functionality
const activeCollapses = reactive<Record<string, boolean>>({});

const toggleCollapse = (collapseId: string) => {
  activeCollapses[collapseId] = !activeCollapses[collapseId];
};

// If other data properties from Nuxt 2 version were needed, define them here as refs or reactives
// Example:
// const bannerImageOne = ref(bannerImageOneSrc); // if bannerImageOneSrc is imported
</script>

<style>
/* Styles remain the same */
</style>
