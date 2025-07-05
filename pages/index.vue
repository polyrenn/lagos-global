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
          <div class=" dashboard-inner" style="background-color:#FFFFFF; height: 600px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrlRef.value})` }">
            <div class="h-75 d-flex justify-content-center align-items-center w-50">
              <div class="w-75 h-50">
                <div class="lagos-global-text text-white">
                  LAG<span class="lagos-global-img2-container"><img class="lagos-global-img2" src="~/assets/images/logo.png" width="100" height="100" alt="logo"></span>
                  <span class="s-container">S</span>
                </div>
                <div class="africa-global-city mt-3">
                  AFRICA’S FASTEST GROWING GLOBAL CITY
                </div>
              </div>
            </div>
            <div class="bounce-top h-25 justify-content-end d-flex align-items-center">
              <a href="http://lagosislandsummit.com/" target="_blank" class="opac px-4 py-2 rounded mr-2 text-white font-weight-bold" style="background-color: #0688DA;">
                Lagos Island Economic Summit
              </a>
              <a href="https://lsvc.ng/" target="_blank" class="opac px-4 py-2 rounded text-white font-weight-bold" style="background-color: #0688DA;">
                LSVC
              </a>
              <NuxtLink to="/#startup" class="opac px-4 py-2 rounded ml-2 text-white font-weight-bold mr-2" style="background-color: #0688DA">
                #StartupLagos
              </NuxtLink>
            </div>
          </div>
        </section>
        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background: #FFFFFF">
          <div class="auto-container text-center">
            <div class="row">
              <div class="col-12">
                <div class="content-box text-center d-flex align-items-center justify-content-center">
                  <div class="w-110">
                    <div class="sec-title light">
                      <h2 class="text-dark why-lag">
                        Why Lagos
                      </h2>
                    </div>
                    <div class="upper-text clearfix why-lag-text">
                      Lagos, the commercial capital of West Africa, is a major hub for diverse businesses and the headquarters of national and global companies. It is  strategically located with land, air and sea connections to major Africa and global market. This vantage position has always made it the destination of first choice for foreign direct investment and center of attraction for investors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="graph-container">
              <div class="row  justify-content-center h-100 mt-5">
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2">
                  <img src="~/assets/images/graph30.png" style="width: 128px; height: 128px" alt="Graph 30%">
                  <div class="font-weight-bold text-dark">
                    Contributes more than 30% of Nigeria GDP
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph60.png" style="width: 128px; height: 128px" alt="Graph 60%">
                  <div class="text-dark font-weight-bold">
                    Responsible for about 60% of energy demand in Nigeria
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph90.png" style="width: 128px; height: 128px" alt="Graph 90%">
                  <div class="text-dark font-weight-bold">
                    Accounts for 90% Nigeria’s foreign Trade flow
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph50.png" style="width: 141px; height: 128px" alt="Graph 50%">
                  <div class="font-weight-bold text-dark">
                    Generates over 50% of Nigeria’s port revenues
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <img src="~/assets/images/graph70.png" style="width: 128px; height: 128px" alt="Graph 70%">
                  <div class="text-dark font-weight-bold">
                    70% of the state revenue is internally generated
                  </div>
                </div>
              </div>
            </div>
            <div class="read-more p-2 mt-5 opac">
              <NuxtLink to="/whylagos" style="border: 2px solid #1B6C9E" class="px-4 py-2 rounded">
                Read More <i class="fa fa-arrow-right pl-1" />
              </NuxtLink>
            </div>
          </div>
        </section>

        <!--Welcome Section-->
        <section class="welcome-section">
          <div class="auto-container">
            <div class="row clearfix">
              <!--Feature Block-->
              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <NuxtLink to="/glancelagos#history" class="content-box text-hover" style="text-decoration: none">
                    <div class="icon-box">
                      <span class="flaticon-city-hall-1" />
                    </div>
                    <div class="content">
                      <h4>Lagos History</h4>
                      <div class="mt-2">
                        Lagos State was created on May 27, 1967 and became the federal capital of Nigeria on April 1, . . .
                      </div>
                    </div>
                  </NuxtLink>
                  <div class="more-link">
                    <NuxtLink to="/glancelagos#history"><span class="flaticon-right-2" /></NuxtLink>
                  </div>
                </div>
              </div>

              <!--Feature Block-->
              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <NuxtLink to="/glancelagos#economy" class="content-box text-hover">
                    <div class="icon-box">
                      <span class="flaticon-real-estate" />
                    </div>
                    <div class="content">
                      <h4>Economy & Population</h4>
                      <div class="mt-2">
                        Lagos State has a population of 21 million as at January 2015, making it Africa's largest city . . .
                      </div>
                    </div>
                  </NuxtLink>
                  <div class="more-link">
                    <NuxtLink to="/glancelagos#economy"><span class="flaticon-right-2" /></NuxtLink>
                  </div>
                </div>
              </div>

              <!--Feature Block-->
              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <NuxtLink to="/glancelagos#business" class="content-box text-hover">
                    <div class="icon-box">
                      <span class="flaticon-man" />
                    </div>
                    <div class="content">
                      <h4>Business Climate</h4>
                      <div class="mt-2">
                        Lagos State fosters a conducive environment that allows businesses to thrive . . .
                        <span style="visibility: hidden">some random text</span>
                      </div>
                    </div>
                  </NuxtLink>
                  <div class="more-link">
                    <NuxtLink to="/glancelagos#business"><span class="flaticon-right-2" /></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Investment Section-->
        <section class="investment-section">
          <div class="auto-container">
            <div class="sec-title with-separator">
              <h2>Top 10 Investment Sectors</h2>
              <div class="separator">
                <span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" />
              </div>
            </div>

            <div class="row clearfix">
              <div class="left-column top-ten col-xl-6 col-lg-12 col-md-12 col-sm-12" style="height: 415px; overflow: scroll">
                <div class="col-inner">
                  <div class="investment-sector-box">
                    <a @click="showEnvironment"> Environment</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showHealth">Health</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showAgriculture">Agriculture</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showHousing">Housing</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showTransportation">Transportation</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showTourism">Tourism and culture</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showIct">ICT</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showPower">Power and infrastructure</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showOil">Oil and gas</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="showEducation">Education</a>
                  </div>
                </div>
              </div>

              <div class="right-column top-ten col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="col-inner" style="height: 415px">
                  <div id="sector-info" class="featured-block-two col-lg-12 col-md-6 col-sm-12 h-100">
                    <div class="inner-box h-100">
                      <div>
                        <div v-if="isEnvironment.value" class="content">
                          <h4><a>Environment</a></h4>
                          <div class="row align-items-center">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon7.png" style="height: 24px; width: 24px" alt="env icon">
                                </div>
                                <small class="ml-4">
                                  Generates <span class="font-weight-bold">11, 000 metric</span> tonnes of waste daily
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon3.png" style="height: 24px; width: 24px" alt="env icon">
                                </div>
                                <small class="ml-4">
                                  Estimate to provide <span class="font-weight-bold">500, 000</span> jobs
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/environment">Read More</NuxtLink>
                          </div>
                        </div>

                        <div v-if="isHealth.value" class="content">
                          <h4><a>Health</a></h4>
                           <div class="row">
                            <div class="col-sm-6">
                              <div class="chart-figure" style="border-radius: 10px">
                                Non-health insurance user
                              </div>
                              <div class="d-flex">
                                <div>
                                  Informal sector is <span class="font-weight-bold">63%</span> and formal sector is <span class="font-weight-bold">15% (2013)</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="chart-figure" style="border-radius: 10px">
                                Infant mortality rate
                              </div>
                              <div class="d-flex">
                                <div>
                                  <span class="font-weight-bold">75/1,000</span> life births
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/health">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isAgriculture.value" class="content">
                          <h4><a>Agriculture</a></h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="chart">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="chart">
                            </div>
                          </div>
                          <div class="read-more">
                            <NuxtLink to="/agriculture">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isHousing.value" class="content">
                          <h4><a>Housing</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                5 million units
                              </div>
                              <small> Housing Deficit </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                20% growth / annum
                              </div>
                              <small> Av. Population Growth </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/housing">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isTransportation.value" class="content">
                          <h4><a>Transportation</a></h4>
                           <div class="chart-figure">
                            Investing in Bus Rapid Transit
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon3.png" alt="transport icon">
                                </div>
                                <small class="ml-3">
                                  Average investment required $2 million - $12 million
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/transportation">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isTourism.value" class="content">
                          <h4><a>Tourism and culture</a></h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="chart">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="chart">
                            </div>
                          </div>
                          <div class="read-more">
                            <NuxtLink to="/tourism">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isIct.value" class="content">
                          <h4><a>ICT</a></h4>
                           <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="chart">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="chart">
                            </div>
                          </div>
                          <div class="read-more">
                            <NuxtLink to="/technology">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isPower.value" class="content">
                          <h4><a>Power and infrastructure</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                2,000MW
                              </div>
                              <small> Power supply </small>
                            </div>
                             <div class="col-sm-6">
                              <div class="font-weight-bold">
                                10,000MW
                              </div>
                              <small> Power demand </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/power">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isOil.value" class="content h-100">
                          <h4><a>Oil and Gas</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                800,000MT
                              </div>
                              <small> Homes </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                400,000MT
                              </div>
                              <small> Automobile & Transportation </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/oilandgas">Read More</NuxtLink>
                          </div>
                        </div>
                        <div v-if="isEducation.value" class="content">
                          <h4><a>Education</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1,705
                              </div>
                              <small> No. of Pry & Sec sch (state) </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                15,003
                              </div>
                              <small> No. of Pry & Sec sch (private) </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/education">Read More</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- For Mobile - Content duplicated and simplified for brevity in this example -->
              <div class="right-column top-ten2 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                 <div class="col-inner w-100" style="height: fit-content">
                    <!-- Environment -->
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content inner-box">
                      <h4 class="text-top-ten"><a>Environment</a></h4>
                      <div class="read-more p-2">
                        <NuxtLink class="float-right" to="/environment">Read More</NuxtLink>
                      </div>
                    </div>
                    <!-- Health -->
                     <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                        <h4 class="text-top-ten"><a>Health</a></h4>
                        <div class="read-more p-2">
                            <NuxtLink class="float-right" to="/health">Read More</NuxtLink>
                        </div>
                    </div>
                    <!-- ... other sectors similarly ... -->
                 </div>
              </div>
            </div>
          </div>
        </section>

        <!--Start up Lagos section-->
        <section id="startup" class="startup-stories">
          <div class="auto-container">
            <div class="row clearfix">
              <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-6">
                <div class="col-inner">
                  <div class="sec-title with-separator">
                    <h2>Startup Stories</h2>
                    <div class="separator"><span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" /></div>
                    <div class="text">
                      A global community powered by Lagos for Startups. Our goal is to educate, inspire, and connect entrepreneurs - Meet these awesome entrepreneurs at our monthly meetups here in Lagos.
                    </div>
                  </div>
                  <div class="text-block" style="font-size: 24px; font-weight: 600;color:#424242">
                    Africa 1st Largest <br> Startup Ecosystem
                  </div>
                  <div style="margin-top: 86px; font-size: 12px">
                    <NuxtLink to="/startup-stories">READ MORE STORIES</NuxtLink>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-6">
                <div class="row">
                  <div class="row px-2 startup-margin">
                    <div v-for="item in storyData.value" :key="item.id" class="col-sm-6">
                      <NuxtLink style="color: inherit" :to="`/startup-stories/${item.id}`">
                        <div class="story-board h-100">
                          <img :src="`https://api.lagosglobal.org/api/v1/media/${item.image}`" class="img-fluid" :alt="item.title">
                          <div class="story-board-category">
                            {{ item.title }}
                          </div>
                          <div class="story-board-content">
                            {{ truncateText(item.content.toString().replace(/<[^>]*>/g, ''), 100, '...') }}
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Events Section-->
        <section class="events-section">
          <div class="auto-container">
            <div class="sec-title with-separator">
              <h2>Upcoming Activities & Events</h2>
              <div class="separator"><span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" /></div>
            </div>
            <div class="row clearfix">
              <div v-for="item in eventsData.value" :key="item.id" class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="col-inner">
                  <div class="carousel-box"> <!-- Note: This class implies a carousel, which is not implemented here yet -->
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="event-block">
                      <NuxtLink style="color: inherit" :to="`/upcoming-activity/${item.id}`">
                        <div class="inner-box">
                          <div class="content-box">
                            <div class="date-box">
                              <div class="date">
                                <span class="day">{{ new Date(item.date).getDate() }}</span> <!-- .getDate() for day of month -->
                                <span class="month">{{ monthNames[new Date(item.date).getMonth()] }}</span>
                              </div>
                            </div>
                            <div class="content">
                              <div class="cat-info">
                                <a>{{ item.name }}</a>
                              </div>
                              <h3><a>{{ truncateText(item.details.toString().replace(/<[^>]*>/g, ''), 100, '...') }} </a></h3>
                              <div class="location">
                                {{ item.location }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="see-all text-right">
              <NuxtLink to="/upcoming-activity"><span class="arrow flaticon-right-2" /> View All Upcoming Events</NuxtLink>
            </div>
          </div>
        </section>

        <section id="latestnews" class="news-section">
          <div class="auto-container">
            <div class="sec-title with-separator">
              <h2>Latest Press Releases</h2>
              <div class="separator"><span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" /></div>
            </div>
            <!-- Carousel for press releases - Will need a Vue 3 compatible carousel -->
            <div class="carousel-box">
              <div class="news-carousel"> <!-- Removed owl-theme owl-carousel classes -->
                <div v-for="item in pressReleaseData.value" :key="item.id" class="news-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img :src="`https://api.lagosglobal.org/api/v1/media/${item.image}`" :alt="item.title">
                      </figure>
                      <div class="hover-box">
                        <!-- Lightbox functionality will need a Vue 3 plugin -->
                        <div class="link zoom-link">
                          <a style="color: inherit" :href="`https://api.lagosglobal.org/api/v1/media/${item.image}`" target="_blank" rel="noopener noreferrer">
                            <span class="icon flaticon-zoom-in"/>
                          </a>
                        </div>
                        <div class="link single-link">
                          <NuxtLink :to="`/press-release/${item.id}`"><span class="icon flaticon-link-4" /></NuxtLink>
                        </div>
                      </div>
                    </div>
                    <div class="lower-box">
                      <div class="upper-info">
                        <h4><NuxtLink style="color: inherit" :to="`/press-release/${item.id}`">{{ item.title }} </NuxtLink></h4>
                      </div>
                      <div class="meta-info clearfix">
                        <div class="author-info clearfix">
                          <div class="author-icon">
                            <span class="flaticon-user-3" />
                          </div>
                          <div class="author-title">
                            By {{ item.author }}
                          </div>
                          <div class="date">
                            {{ item.created_at.toString().split('T')[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="see-all text-right text-dark mt-5 font-weight-bold">
              <NuxtLink to="/press-release"><span class="arrow flaticon-right-2" /> View All Press Release</NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!--End pagewrapper-->
    <section class="top-companies">
      <div class="auto-container">
        <div class="sec-title with-separator centered">
          <h2>Top 10 Companies</h2>
          <div class="separator"><span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" /></div>
        </div>
        <div class="row clearfix">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="col-inner">
              <!-- Carousel for top companies - Will need a Vue 3 compatible carousel -->
              <div class="top-companies-carousel"> <!-- Removed owl-carousel owl-theme classes -->
                <img src="~/assets/images/nestle_company.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/chevron.png" width="100" height="100" alt="chevron" class="company-image">
                <img src="~/assets/images/total_comp.png" width="100" height="100" alt="total" class="company-image">
                <img src="~/assets/images/kpmg.png" width="100" height="100" alt="kpmg" class="company-image">
                <img src="~/assets/images/shell.png" width="100" height="100" alt="shell" class="company-image">
                <img src="~/assets/images/andela.png" width="100" height="100" alt="andela" class="company-image">
                <img src="~/assets/images/mtn.png" width="100" height="100" alt="mtn" class="company-image">
                <img src="~/assets/images/dangote.png" width="100" height="100" alt="dangote" class="company-image">
                <img src="~/assets/images/exon_mobile.png" width="100" height="100" alt="exon_mobile" class="company-image">
                <img src="~/assets/images/nnpc.png" width="100" height="100" alt="nnpc" class="company-image">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <Footer />

    <!--Scroll to top-->
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Components like Header, Footer, SearchPopup, ScrollTop are auto-imported by Nuxt 3 if placed in components/ directory.

// Import images if they are in assets and used in script, otherwise use public path for template src
// For backgroundUrl used in :style, it's better to have it in public or handle with Vite's asset handling.
// Assuming backgroundUrl is meant to be a dynamic ref based on some logic, or a static path.
// If static and in assets: import bgUrl from '~/assets/images/background/bcimage.png'; const backgroundUrlRef = ref(bgUrl);
// If in public: const backgroundUrlRef = ref('/images/background/bcimage.png');
// For this example, let's assume it's in public/images/background/bcimage.png
const backgroundUrlRef = ref('/images/background/bcimage.png'); // Adjusted path

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const truncateText = (text: string, length: number, suffix: string): string => {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  }
  return text;
};

const config = useRuntimeConfig();
const apiBaseUrl = config.public.axios.baseURL;

// Data fetching
const { data: eventsData, error: eventsError } = await useAsyncData('events', async () => {
  try {
    const response = await $fetch<{ data: any[] }>(`${apiBaseUrl}/events`);
    return response.data.length > 4 ? response.data.slice(0, 4) : response.data;
  } catch (e) {
    console.error('Failed to fetch events:', e);
    return []; // Return empty array on error
  }
});

const { data: storyData, error: storiesError } = await useAsyncData('stories', async () => {
 try {
    const response = await $fetch<{ data: any[] }>(`${apiBaseUrl}/stories`);
    return response.data.length > 2 ? response.data.slice(0, 2) : response.data;
  } catch (e) {
    console.error('Failed to fetch stories:', e);
    return [];
  }
});

const { data: pressReleaseData, error: pressReleaseError } = await useAsyncData('pressRelease', async () => {
  try {
    const response = await $fetch<{ data: any[] }>(`${apiBaseUrl}/posts`);
    return response.data.length > 4 ? response.data.slice(0, 4) : response.data;
  } catch (e) {
    console.error('Failed to fetch press releases:', e);
    return [];
  }
});


// Reactive state for active investment sector
const isEnvironment = ref(true);
const isHealth = ref(false);
const isAgriculture = ref(false);
const isHousing = ref(false);
const isTransportation = ref(false);
const isTourism = ref(false);
const isIct = ref(false);
const isPower = ref(false);
const isOil = ref(false);
const isEducation = ref(false);

const setActiveSector = (sector: string) => {
  isEnvironment.value = sector === 'environment';
  isHealth.value = sector === 'health';
  isAgriculture.value = sector === 'agriculture';
  isHousing.value = sector === 'housing';
  isTransportation.value = sector === 'transportation';
  isTourism.value = sector === 'tourism';
  isIct.value = sector === 'ict';
  isPower.value = sector === 'power';
  isOil.value = sector === 'oil';
  isEducation.value = sector === 'education';
};

const showEnvironment = () => setActiveSector('environment');
const showHealth = () => setActiveSector('health');
const showAgriculture = () => setActiveSector('agriculture');
const showHousing = () => setActiveSector('housing');
const showTransportation = () => setActiveSector('transportation');
const showTourism = () => setActiveSector('tourism');
const showIct = () => setActiveSector('ict');
const showPower = () => setActiveSector('power');
const showOil = () => setActiveSector('oil');
const showEducation = () => setActiveSector('education');

// Handle potential errors from data fetching
if (eventsError.value) console.error("Error fetching events:", eventsError.value);
if (storiesError.value) console.error("Error fetching stories:", storiesError.value);
if (pressReleaseError.value) console.error("Error fetching press releases:", pressReleaseError.value);

// Ensure data is initialized, especially if fetch fails
if (!eventsData.value) eventsData.value = [];
if (!storyData.value) storyData.value = [];
if (!pressReleaseData.value) pressReleaseData.value = [];

</script>

<style>
  .barometer-section{
    /* Ensure image path is correct for Nuxt 3 (public or assets) */
    background: url('/images/blue-dark-bg.jpg'); /* Assuming image moved to public/images */
    background-color:transparent !important;
    background-size: cover;
  }
  .bar-hd-text{
    font-weight: 700;font-size: 45px;max-width: 600px;line-height: 59px;
  }
  .bar-hd-subtxt{
    max-width: inherit;line-height: 36px;font-size: 20px;font-weight: normal;
    margin-top:25px;
  }
  .lagos-state-investment-barometer{
    position:absolute;left: 0;top:-90px;width:1px;height: 1px;background: transparent;
  }
  @media (max-width:767px) {
    .barometer-section{
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
    .bar-hd-text{
      font-weight: 700;font-size: 35px;line-height: 42px;
    }
    .bar-hd-subtxt{
      line-height: 27px;font-size: 17px;margin-top:20px;
    }
    .lagos-state-investment-barometer{
      top:-50px;
    }
  }
</style>
