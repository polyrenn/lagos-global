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
          <div class=" dashboard-inner" style="background-color:#FFFFFF; height: 600px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-75 d-flex justify-content-center align-items-center w-50">
              <div class="w-75 h-50">
                <div class="lagos-global-text text-white">
                  LAG<span class="lagos-global-img2-container"><img class="lagos-global-img2" src="~assets/images/logo.png" width="100" height="100"></span>
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
              <a href="/#startup" class="opac px-4 py-2 rounded ml-2 text-white font-weight-bold mr-2" style="background-color: #0688DA">
                #StartupLagos
              </a>
            </div>
          </div>
          <!-- Slide Item -->
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
                  <!--                                  <div class="text-center text-white graph-inner">-->
                  <!--                                    30%-->
                  <!--                                  </div>-->
                  <!--                                  <ChartComponent />-->
                  <img src="~/assets/images/graph30.png" style="width: 128px; height: 128px">

                  <div class="font-weight-bold text-dark">
                    Contributes more than 30% of Nigeria GDP
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <!--                  <div class="text-center text-white graph-inner">-->
                  <!--                    60%-->
                  <!--                  </div>-->
                  <!--                  <ChartComponent2 />-->
                  <img src="~/assets/images/graph60.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    Responsible for about 60% of energy demand in Nigeria
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <!--                  <div class="text-center text-white graph-inner">-->
                  <!--                    90%-->
                  <!--                  </div>-->
                  <!--                  <ChartComponent3 />-->
                  <img src="~/assets/images/graph90.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    Accounts for 90% Nigeria’s foreign Trade flow
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <!--                  <div class="text-center text-white graph-inner">-->
                  <!--                    50%-->
                  <!--                  </div>-->
                  <!--                  <ChartComponent4 />-->
                  <img src="~/assets/images/graph50.png" style="width: 141px; height: 128px">

                  <div class="font-weight-bold text-dark">
                    Generates over 50% of Nigeria’s port revenues
                  </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-md-2 col-sm-2 col-xl-2 col-lg-2 graph-margin2">
                  <!--                  <div class="text-center text-white graph-inner">-->
                  <!--                    70%-->
                  <!--                  </div>-->
                  <!--                  <ChartComponent5 />-->
                  <img src="~/assets/images/graph70.png" style="width: 128px; height: 128px">

                  <div class="text-dark font-weight-bold">
                    70% of the state revenue is internally generated
                  </div>
                </div>
              </div>
            </div>
            <!--            <div class="row justify-content-center">-->
            <!--              <div class="col-2 graph-text text-center">-->
            <!--                Contributes more than 30% of Nigeria GDP-->
            <!--              </div>-->
            <!--              <div class="col-2 graph-text text-center">-->
            <!--                Consumes more than 60% of Nigeria’s energy-->
            <!--              </div>-->
            <!--              <div class="col-2 graph-text text-center">-->
            <!--                Accounts for 90% Nigeria’s foreign Trade flow-->
            <!--              </div>-->
            <!--              <div class="col-2 graph-text text-center">-->
            <!--                Generate over 50% of Nigeria’s port revenues-->
            <!--              </div>-->
            <!--              <div class="col-2 graph-text text-center">-->
            <!--                70% of the state revenue is internally generated-->
            <!--              </div>-->
            <!--            </div>-->
            <div class="read-more p-2 mt-5 opac">
              <a href="/whylagos" style="border: 2px solid #1B6C9E" class="px-4 py-2 rounded">
                Read More <i class="fa fa-arrow-right pl-1" />
              </a>
            </div>
          </div>
        </section>
<!--                <section class="startup-stories mt-5 barometer-section">-->
<!--                  <span id="lagos-state-investment-barometer" class="lagos-state-investment-barometer"></span>-->
<!--                  <div style="background: rgba(24, 50, 71, 0.8);width:100%;height: 100%;position:absolute;left:0;top:0;"></div>-->
<!--                  <div class="auto-container">-->
<!--                    <div class="row clearfix">-->
<!--                      <div class="sec-title centered" style="max-width: 925px;display: flex;justify-content: center;flex-wrap: wrap;">-->
<!--                        <div class="h1 text-white w-100 bar-hd-text">-->
<!--                          The Lagos State Investment Barometer-->
<!--                        </div>-->

<!--                        <div class="text-white w-100 bar-hd-subtxt">-->
<!--                          The Investment Barometer is comprehensive, yet easy to fill. It looks at all aspects of the business environment including policy, funding to quality of labour, infrastructure, quality of life, tax policy, ease of doing business amongst others. The survey should take no more than 10 minutes of your time. Fill this survey, so together we can shape our economic future.-->
<!--                        </div>-->

<!--                        <a href="https://bit.ly/SDG_BAROMETER" target="_blank" style="font-weight:600;margin-top:45px;border-radius:4px;background: #ffffff;border: 2px solid #ffffff;font-size: 15px;line-height: 18px;padding: 10px 50px;color: #183247;">-->
<!--                          Click to fill survey-->
<!--                        </a>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </section>-->

<!--                <section class="startup-stories mt-5" style="background-color: white">-->
<!--                  <div class="auto-container">-->
<!--                    <div class="row clearfix">-->
<!--                      <div class="sec-title centered">-->
<!--                        <div class="lagos-global-text">-->
<!--                          LAG<span class="lagos-global-img2-container"><img class="lagos-global-img2" src="~assets/images/logo.png" width="180" height="180"></span>-->
<!--                          <span style="margin-left: -36px;">S</span>-->
<!--                        </div>-->
<!--                        <div class="lagos-global-sub-text">-->
<!--                          AFRICA'S FASTEST GROWING GLOBAL CITY-->
<!--                        </div>-->

<!--                        <div class="lower-text">-->
<!--                          An initiative structured to promote the sustainable development goals and incentives in Lagos state.-->
<!--                          Our vision is to make Lagos the most desirable incentives destination in the world.-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </section>-->

        <!--        <section class="facts-section">-->
        <!--          <div class="auto-container">-->
        <!--            <div class="row clearfix">-->
        <!--              &lt;!&ndash;              <div class="lagos-theme-header">&ndash;&gt;-->
        <!--              &lt;!&ndash;                LAGOS THEMES MEETS GLOBAL SDGs&ndash;&gt;-->
        <!--              &lt;!&ndash;              </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;Fact Column&ndash;&gt;-->
        <!--              <div class="col-12 d-flex justify-content-center">-->
        <!--                <img src="~assets/images/sdg.png" alt="image" width="1300">-->
        <!--              </div>-->

        <!--              &lt;!&ndash;              <div class="fact-column col-lg-4 col-md-4 col-sm-12">&ndash;&gt;-->
        <!--              &lt;!&ndash;                <div class="inner">&ndash;&gt;-->
        <!--              &lt;!&ndash;                  <div class="fact-box">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    <span class="count-box">21M</span>&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <h4 class="fact-title">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    People living in <br>our city&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </h4>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <div class="text">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    Foresee the content that should be embedded here.&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;              </div>&ndash;&gt;-->

        <!--              &lt;!&ndash;Fact Column&ndash;&gt;-->

        <!--              &lt;!&ndash;              <div class="fact-column col-lg-4 col-md-4 col-sm-12">&ndash;&gt;-->
        <!--              &lt;!&ndash;                <div class="inner">&ndash;&gt;-->
        <!--              &lt;!&ndash;                  <div class="fact-box">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    <span class="count-box">1.17k</span>&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <h4 class="fact-title">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    Square kilometres <br>region covers&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </h4>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <div class="text">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    A big city to develop, enhance and live in with diverse opportunities.&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;              </div>&ndash;&gt;-->

        <!--              &lt;!&ndash;Fact Column&ndash;&gt;-->

        <!--              &lt;!&ndash;              <div class="fact-column col-lg-4 col-md-4 col-sm-12">&ndash;&gt;-->
        <!--              &lt;!&ndash;                <div class="inner">&ndash;&gt;-->
        <!--              &lt;!&ndash;                  <div class="fact-box">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    <span class="count-box">24%</span>&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <h4 class="fact-title">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    Private & domestic <br>garden land&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </h4>&ndash;&gt;-->

        <!--              &lt;!&ndash;                  <div class="text">&ndash;&gt;-->
        <!--              &lt;!&ndash;                    Trouble that are bound to ensue and equal to city work who fail in their duty.&ndash;&gt;-->
        <!--              &lt;!&ndash;                  </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;                </div>&ndash;&gt;-->
        <!--              &lt;!&ndash;              </div>&ndash;&gt;-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </section>-->

        <!--Welcome Section-->

        <section class="welcome-section">
          <div class="auto-container">
            <div class="row clearfix">
              <!--Feature Block-->

              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <a href="/glancelagos#history" class="content-box text-hover" style="text-decoration: none">
                    <div class="icon-box">
                      <span class="flaticon-city-hall-1" />
                    </div>

                    <div class="content">
                      <!--                      <div class="subtitle">-->
                      <!--                        In Effect-->
                      <!--                      </div>-->

                      <h4>Lagos History</h4>
                      <div class="mt-2">
                        Lagos State was created on May 27, 1967 and became the federal capital of Nigeria on April 1, . . .
                      </div>
                    </div>
                  </a>

                  <div class="more-link">
                    <a href="/glancelagos#history"><span class="flaticon-right-2" /></a>
                  </div>
                </div>
              </div>

              <!--Feature Block-->

              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <a href="/glancelagos#economy" class="content-box text-hover">
                    <div class="icon-box">
                      <span class="flaticon-real-estate" />
                    </div>

                    <div class="content">
                      <!--                      <div class="subtitle">-->
                      <!--                        Great Promise-->
                      <!--                      </div>-->

                      <h4>Economy & Population</h4>
                      <div class="mt-2">
                        Lagos State has a population of 21 million as at January 2015, making it Africa's largest city . . .
                      </div>
                    </div>
                  </a>

                  <div class="more-link">
                    <a href="/glancelagos#economy"><span class="flaticon-right-2" /></a>
                  </div>
                </div>
              </div>

              <!--Feature Block-->

              <div class="featured-block col-lg-4 col-md-6 col-sm-12">
                <div class="inner-box opac1">
                  <a href="/glancelagos#business" class="content-box text-hover">
                    <div class="icon-box">
                      <span class="flaticon-man" />
                    </div>

                    <div class="content">
                      <!--                      <div class="subtitle">-->
                      <!--                        SDGs-->
                      <!--                      </div>-->

                      <h4>Business Climate</h4>
                      <div class="mt-2">
                        Lagos State fosters a conducive environment that allows businesses to thrive . . .
                        <span style="visibility: hidden">some random text</span>
                      </div>
                    </div>
                  </a>

                  <div class="more-link">
                    <a href="/glancelagos#business"><span class="flaticon-right-2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--About Section-->

        <!--Services Section-->

        <section class="investment-section">
          <div class="auto-container">
            <div class="sec-title with-separator">
              <h2>Top 10 Investment Sectors</h2>
              <div class="separator">
                <span class="cir c-1" /><span class="cir c-2" /><span
                  class="cir c-3"
                />
              </div>
            </div>

            <div class="row clearfix">
              <!--Featured Service Block-->
              <div class="left-column top-ten col-xl-6 col-lg-12 col-md-12 col-sm-12" style="height: 415px; overflow: scroll">
                <div class="col-inner">
                  <div class="investment-sector-box">
                    <a @click="environment"> Environment</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="health">Health</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="agriculture">Agriculture</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="housing">Housing</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="transportation">Transportation</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="tourism">Tourism and culture</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="ict">ICT</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="power">Power and infrastructure</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="oil">Oil and gas</a>
                  </div>
                  <div class="investment-sector-box">
                    <a @click="education">Education</a>
                  </div>
                </div>
              </div>

              <div class="right-column top-ten col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="col-inner" style="height: 415px">
                  <div id="sector-info" class="featured-block-two col-lg-12 col-md-6 col-sm-12 h-100">
                    <div class="inner-box h-100">
                      <div>
                        <div v-if="isEnvironment" class="content">
                          <h4><a>Environment</a></h4>
                          <div class="row align-items-center">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon7.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Generates <span class="font-weight-bold">11, 000 metric</span> tonnes of waste daily
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon3.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Estimate to provide <span class="font-weight-bold">500, 000</span> jobs
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon5.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Government plans to progressively increase waste processing capacity from <span class="font-weight-bold">18%</span> in <span class="font-weight-bold">2011</span> to <span class="font-weight-bold">60%</span> in <span class="font-weight-bold">2025</span>
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon2.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Largest producer of compost in Africa converting <span class="font-weight-bold">600</span> tonnes of waste into compost
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon4.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Over <span>50%</span> of the waste generated in the state (biodegradable waste) can be used for compositing
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon6.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Projected popeulation to be over <span class="font-weight-bold">30million</span> in <span class="font-weight-bold">2025</span> with <span class="font-weight-bold">0.5kg-0.65kg</span> of waste generated/person/day
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/environment">Read More</a>
                          </div>
                        </div>

                        <div v-if="isHealth" class="content">
                          <h4><a>Health</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="chart-figure" style="border-radius: 10px">
                                Non-health insurance user
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
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
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  <span class="font-weight-bold">75/1,000</span> life births
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Health Penetration rate
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Increased from <span class="font-weight-bold">0.43%</span> in <span class="font-weight-bold">2005</span> to about <span class="font-weight-bold">3.46%</span> in <span class="font-weight-bold">2014</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Public health workers
                              </div>
                              <div class=" d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Doctors-<span class="font-weight-bold">1,265</span> Nurses-<span class="font-weight-bold">3,372,</span> Pharmacists-<span class="font-weight-bold">209</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Private health workers
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Doctors-<span class="font-weight-bold">1,342</span> Nurses-<span class="font-weight-bold">2,134,</span> Pharmacists-<span class="font-weight-bold">43</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/health">Read More</a>
                          </div>
                        </div>
                        <div v-if="isAgriculture" class="content">
                          <h4><a>Agriculture</a></h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/agriculture">Read More</a>
                          </div>
                        </div>
                        <div v-if="isHousing" class="content">
                          <h4><a>Housing</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                5 million units
                              </div>
                              <small>
                                Housing Deficit
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                20% growth / annum
                              </div>
                              <small>
                                Av. Population Growth
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                Over 1,500 people/ day
                              </div>
                              <small>
                                Av. Population Growth
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                About 10,000 / annum
                              </div>
                              <small>
                                Influx of Expatriates
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1 - 13 malls within 9 years
                              </div>
                              <small>
                                Growth of malls
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                2.5% of monthly wage
                              </div>
                              <small>
                                Contribution to mortgage
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                72 houses built to meet demand for low cost housing
                              </div>
                              <small>
                                Recent development
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/housing">Read More</a>
                          </div>
                        </div>
                        <div v-if="isTransportation" class="content">
                          <h4><a>Transportation</a></h4>
                          <div class="chart-figure">
                            Investing in Bus Rapid Transit
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon3.png">
                                </div>
                                <small class="ml-3">
                                  Average investment required $2 million - $12 million
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon2.png">
                                </div>
                                <small class="ml-3">
                                  ROl 12%-22%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon1.png">
                                </div>
                                <small class="ml-3">
                                  Payback period 5 years
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="chart-figure mt-4">
                            Investing in Rail Services
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon3.png">
                                </div>
                                <small class="ml-3">
                                  Average investment required $70 million - $100 million
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon2.png">
                                </div>
                                <small class="ml-3">
                                  ROl 30%-35%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon1.png">
                                </div>
                                <small class="ml-3">
                                  Payback period 5 years
                                </small>
                              </div>
                            </div>
                          </div>

                          <div class="read-more p-2">
                            <a class="float-right" href="/transportation">Read More</a>
                          </div>
                        </div>
                        <div v-if="isTourism" class="content">
                          <h4><a>Tourism and culture</a></h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/tourism">Read More</a>
                          </div>
                        </div>
                        <div v-if="isIct" class="content">
                          <h4><a>ICT</a></h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/technology">Read More</a>
                          </div>
                        </div>
                        <div v-if="isPower" class="content">
                          <h4><a>Power and infrastructure</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                2,000MW
                              </div>
                              <small>
                                Power supply
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                10,000MW
                              </div>
                              <small>
                                Power demand
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                500MJ/inhabitant
                              </div>
                              <small>
                                Electricity consumption per capital
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                40%
                              </div>
                              <small>
                                Proportion of households with access to electricity
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                20%
                              </div>
                              <small>
                                Energy lost through transmission
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                48MW(2015)
                              </div>
                              <small>
                                Recent improvements
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/power">Read More</a>
                          </div>
                        </div>
                        <div v-if="isOil" class="content h-100">
                          <h4><a>Oil and Gas</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                800,000MT
                              </div>
                              <small>
                                Homes
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                400,000MT
                              </div>
                              <small>
                                Automobile & Transportation
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                400,000MT
                              </div>
                              <small>
                                Agro Processing
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                100,000MT
                              </div>
                              <small>
                                Food & Abattoirs
                              </small>
                            </div>
                          </div>

                          <div class="read-more p-2">
                            <a class="float-right" href="/oilandgas">Read More</a>
                          </div>
                        </div>
                        <div v-if="isEducation" class="content">
                          <h4><a>Education</a></h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1,705
                              </div>
                              <small>
                                No. of Pry & Sec sch (state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                15,003
                              </div>
                              <small>
                                No. of Pry & Sec sch (private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1M
                              </div>
                              <small>
                                No. of students(state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1.3M
                              </div>
                              <small>
                                No. of students(private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                28,390
                              </div>
                              <small>
                                No. of teachers(state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                118,000
                              </div>
                              <small>
                                No. of teachers(private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                91,000
                              </div>
                              <small>
                                Technical and Vocational Education and Training
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                4M
                              </div>
                              <small>
                                Estimated target market size in lagos
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/education">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--For Mobile-->
              <div class="right-column top-ten2 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="col-inner w-100" style="height: fit-content">
                  <div class="featured-block-two col-lg-12 col-md-6 col-sm-12 h-100">
                    <div class=" h-100">
                      <div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content inner-box">
                          <h4 class="text-top-ten">
                            <a>Environment</a>
                          </h4>
                          <div class="row align-items-center">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon7.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Generates <span class="font-weight-bold">11, 000 metric</span> tonnes of waste daily
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon3.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Estimate to provide <span class="font-weight-bold">500, 000</span> jobs
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon5.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Government plans to progressively increase waste processing capacity from <span class="font-weight-bold">18%</span> in <span class="font-weight-bold">2011</span> to <span class="font-weight-bold">60%</span> in <span class="font-weight-bold">2025</span>
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon2.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Largest producer of compost in Africa converting <span class="font-weight-bold">600</span> tonnes of waste into compost
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon4.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Over <span>50%</span> of the waste generated in the state (biodegradable waste) can be used for compositing
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex align-items-center">
                                <div style="min-height: 24px; min-width: 24px">
                                  <img src="~/assets/images/env-icon6.png" style="height: 24px; width: 24px">
                                </div>
                                <small class="ml-4">
                                  Projected popeulation to be over <span class="font-weight-bold">30million</span> in <span class="font-weight-bold">2025</span> with <span class="font-weight-bold">0.5kg-0.65kg</span> of waste generated/person/day
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/environment">Read More</a>
                          </div>
                        </div>

                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Health</a>
                          </h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="chart-figure" style="border-radius: 10px">
                                Non-health insurance user
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
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
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  <span class="font-weight-bold">75/1,000</span> life births
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Health Penetration rate
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Increased from <span class="font-weight-bold">0.43%</span> in <span class="font-weight-bold">2005</span> to about <span class="font-weight-bold">3.46%</span> in <span class="font-weight-bold">2014</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Public health workers
                              </div>
                              <div class=" d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Doctors-<span class="font-weight-bold">1,265</span> Nurses-<span class="font-weight-bold">3,372,</span> Pharmacists-<span class="font-weight-bold">209</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="chart-figure" style=" border-radius: 10px">
                                Private health workers
                              </div>
                              <div class="d-flex">
                                <!--                                <i aria-hidden="true" class="fas fa-dot-circle mt-1" style="color: #38429A" />-->
                                <div>
                                  Doctors-<span class="font-weight-bold">1,342</span> Nurses-<span class="font-weight-bold">2,134,</span> Pharmacists-<span class="font-weight-bold">43</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/health">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Agriculture</a>
                          </h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/agriculture">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Housing</a>
                          </h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                5 million units
                              </div>
                              <small>
                                Housing Deficit
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                20% growth / annum
                              </div>
                              <small>
                                Av. Population Growth
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                Over 1,500 people/ day
                              </div>
                              <small>
                                Av. Population Growth
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                About 10,000 / annum
                              </div>
                              <small>
                                Influx of Expatriates
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1 - 13 malls within 9 years
                              </div>
                              <small>
                                Growth of malls
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                2.5% of monthly wage
                              </div>
                              <small>
                                Contribution to mortgage
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                72 houses built to meet demand for low cost housing
                              </div>
                              <small>
                                Recent development
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/housing">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Transportation</a>
                          </h4>
                          <div class="chart-figure">
                            Investing in Bus Rapid Transit
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon3.png">
                                </div>
                                <small class="ml-3">
                                  Average investment required $2 million - $12 million
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon2.png">
                                </div>
                                <small class="ml-3">
                                  ROl 12%-22%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon1.png">
                                </div>
                                <small class="ml-3">
                                  Payback period 5 years
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="chart-figure mt-4">
                            Investing in Rail Services
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon3.png">
                                </div>
                                <small class="ml-3">
                                  Average investment required $70 million - $100 million
                                </small>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon2.png">
                                </div>
                                <small class="ml-3">
                                  ROl 30%-35%
                                </small>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="d-flex">
                                <div style="min-height: 24px;min-width: 24px;">
                                  <img src="~/assets/images/trans-icon1.png">
                                </div>
                                <small class="ml-3">
                                  Payback period 5 years
                                </small>
                              </div>
                            </div>
                          </div>

                          <div class="read-more p-2">
                            <a class="float-right" href="/transportation">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Tourism and culture</a>
                          </h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/tourism">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>ICT</a>
                          </h4>
                          <div class="row" style="margin-bottom: 25px">
                            <div class="col-5">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Revenue</span>
                              <img src="~/assets/images/line_data_point2.png" alt="">
                            </div>
                            <div class="col-7">
                              <div class="chart-figure">
                                42%
                              </div>
                              <span class="chart-label">Public Trans</span>
                              <img src="~/assets/images/line_data_point.png" alt="">
                            </div>
                          </div>

                          <div class="read-more">
                            <a href="/technology">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Power and infrastructure</a>
                          </h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                2,000MW
                              </div>
                              <small>
                                Power supply
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                10,000MW
                              </div>
                              <small>
                                Power demand
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                500MJ/inhabitant
                              </div>
                              <small>
                                Electricity consumption per capital
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                40%
                              </div>
                              <small>
                                Proportion of households with access to electricity
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                20%
                              </div>
                              <small>
                                Energy lost through transmission
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                48MW(2015)
                              </div>
                              <small>
                                Recent improvements
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/power">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content h-100 mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Oil and Gas</a>
                          </h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                800,000MT
                              </div>
                              <small>
                                Homes
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                400,000MT
                              </div>
                              <small>
                                Automobile & Transportation
                              </small>
                            </div>
                          </div>
                          <div class="row mt-3">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                400,000MT
                              </div>
                              <small>
                                Agro Processing
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                100,000MT
                              </div>
                              <small>
                                Food & Abattoirs
                              </small>
                            </div>
                          </div>

                          <div class="read-more p-2">
                            <a class="float-right" href="/oilandgas">Read More</a>
                          </div>
                        </div>
                        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="content mt-5 inner-box">
                          <h4 class="text-top-ten">
                            <a>Education</a>
                          </h4>
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1,705
                              </div>
                              <small>
                                No. of Pry & Sec sch (state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                15,003
                              </div>
                              <small>
                                No. of Pry & Sec sch (private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1M
                              </div>
                              <small>
                                No. of students(state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                1.3M
                              </div>
                              <small>
                                No. of students(private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                28,390
                              </div>
                              <small>
                                No. of teachers(state)
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                118,000
                              </div>
                              <small>
                                No. of teachers(private)
                              </small>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                91,000
                              </div>
                              <small>
                                Technical and Vocational Education and Training
                              </small>
                            </div>
                            <div class="col-sm-6">
                              <div class="font-weight-bold">
                                4M
                              </div>
                              <small>
                                Estimated target market size in lagos
                              </small>
                            </div>
                          </div>
                          <div class="read-more p-2">
                            <a class="float-right" href="/education">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

                    <div class="separator">
                      <span class="cir c-1" /><span class="cir c-2" /><span
                        class="cir c-3"
                      />
                    </div>
                    <div class="text">
                      A global community powered by Lagos for Startups.
                      Our goal is to educate, inspire, and connect entrepreneurs -
                      Meet these awesome entrepreneurs at our monthly meetups
                      here in Lagos.
                    </div>
                  </div>

                  <div class="text-block" style="font-size: 24px; font-weight: 600;color:#424242">
                    Africa 1st Largest <br>
                    Startup Ecosystem
                  </div>

                  <div style="margin-top: 86px; font-size: 12px">
                    <a href="/startup-stories">READ MORE STORIES</a>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-6">
                <div class="row">
<!--                  <div class="row startup-stories-stats-group w-100 pb-2 startup-margin">-->
<!--                    <div class="startup-stats">-->
<!--                      <div class="date-stat">-->
<!--                        2018-->
<!--                      </div>-->
<!--                      <div class="data-content">-->
<!--                        28-->
<!--                      </div>-->
<!--                      <div class="data-title">-->
<!--                        Total Startups-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="startup-stats">-->
<!--                      <div class="date-stat">-->
<!--                        2019-->
<!--                      </div>-->
<!--                      <div class="data-content">-->
<!--                        $28m-->
<!--                      </div>-->
<!--                      <div class="data-title">-->
<!--                        Avg. Seed Capital-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="startup-stats">-->
<!--                      <div class="date-stat">-->
<!--                        2020-->
<!--                      </div>-->
<!--                      <div class="data-content">-->
<!--                        43%-->
<!--                      </div>-->
<!--                      <div class="data-title">-->
<!--                        Raised Funding-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="row px-2 startup-margin">
                    <div v-for="item in storyData" :key="item.id" class="col-sm-6">
                      <a style="color: inherit" :href="`startup-stories/${item.id}`">
                      <div class="story-board h-100">
                        <img :src="`https://api.lagosglobal.org/api/v1/media/${item.image}`" class="img-fluid">
                        <div class="story-board-category">
                          {{ item.title }}
                        </div>
                        <div class="story-board-content">
                          {{ item.content.toString().replace(/<[^>]*>/g, '') | truncate(100, '...') }}
                        </div>
                      </div>
                      </a>
                    </div>
                    <!--                    <div class="col-sm-6 startup-margin">-->
                    <!--                      <div class="story-board">-->
                    <!--                        <img src="~/assets/images/nfc.png" class="img-fluid">-->
                    <!--                        <div class="story-board-category">-->
                    <!--                          STARTUP STORY-->
                    <!--                        </div>-->
                    <!--                        <div class="story-board-content">-->
                    <!--                          Paystack is making life easier for-->
                    <!--                          Payments accessible at a time-->
                    <!--                          with our dynamic suite of-->
                    <!--                          ??? powered solutions-->
                    <!--                        </div>-->
                    <!--                      </div>-->
                    <!--                    </div>-->
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

              <div class="separator">
                <span class="cir c-1" /><span class="cir c-2" /><span
                  class="cir c-3"
                />
              </div>
            </div>
            <div class="row clearfix">
              <div v-for="item in eventsData" :key="item.id" class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div class="col-inner">
                  <div class="carousel-box">
                    <!--Event Block-->

                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="event-block">
                      <a style="color: inherit" :href="`upcoming-activity/${item.id}`">
                        <div class="inner-box">
                          <div class="content-box">
                            <div class="date-box">
                              <div class="date">
                                <span class="day">{{ new Date(item.date).getDay() }}</span><span class="month">{{ monthNames[new Date(item.date).getMonth()] }}</span>
                              </div>
                            </div>

                            <div class="content">
                              <div class="cat-info">
                                <a>{{ item.name }}</a>
                              </div>

                              <h3><a>{{ item.details.toString().replace(/<[^>]*>/g, '') | truncate(100, '...') }} </a></h3>

                              <div class="location">
                                {{ item.location }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    <!--Event Block-->

                    <!--                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="event-block">-->
                    <!--                      <div class="inner-box">-->
                    <!--                        <div class="content-box">-->
                    <!--                          <div class="date-box">-->
                    <!--                            <div class="date">-->
                    <!--                              <span class="day">22</span><span class="month">December</span>-->
                    <!--                            </div>-->
                    <!--                          </div>-->

                    <!--                          <div class="content">-->
                    <!--                            <div class="cat-info">-->
                    <!--                              <a href="index.html#">Training</a>-->
                    <!--                            </div>-->

                    <!--                            <h3><a href="event-details.html">Aquaculture and Value chain</a></h3>-->

                    <!--                            <div class="location">-->
                    <!--                              At 12th street, Radisson Blue, Lekki-->
                    <!--                            </div>-->
                    <!--                          </div>-->
                    <!--                        </div>-->
                    <!--                      </div>-->
                    <!--                    </div>-->
                  </div>
                </div>
              </div>

              <!--              <div class="right-column col-xl-6 col-lg-12 col-md-12 col-sm-12">-->
              <!--                <div class="col-inner">-->
              <!--                  <div class="carousel-box">-->
              <!--                    &lt;!&ndash;Event Block&ndash;&gt;-->

              <!--                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="event-block">-->
              <!--                      <div class="inner-box">-->
              <!--                        <div class="content-box">-->
              <!--                          <div class="date-box">-->
              <!--                            <div class="date">-->
              <!--                              <span class="day">14</span><span class="month">December</span>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="content">-->
              <!--                            <div class="cat-info">-->
              <!--                              <a href="index.html#">Conference</a>-->
              <!--                            </div>-->

              <!--                            <h3><a href="event-details.html">Media Forum Lagos</a></h3>-->

              <!--                            <div class="location">-->
              <!--                              At 12th street, Radisson Blue, Lekki-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->

              <!--                    &lt;!&ndash;Event Block&ndash;&gt;-->

              <!--                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="event-block">-->
              <!--                      <div class="inner-box">-->
              <!--                        <div class="content-box">-->
              <!--                          <div class="date-box">-->
              <!--                            <div class="date">-->
              <!--                              <span class="day">22</span><span class="month">December</span>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="content">-->
              <!--                            <div class="cat-info">-->
              <!--                              <a href="index.html#">Training</a>-->
              <!--                            </div>-->

              <!--                            <h3><a href="event-details.html">Aquaculture and Value chain</a></h3>-->

              <!--                            <div class="location">-->
              <!--                              At 12th street, Radisson Blue, Lekki-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </div>-->

              <!--                </div>-->
              <!--              </div>-->
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="see-all text-right">
              <a><span class="arrow flaticon-right-2" /> View All Upcoming Events</a>
            </div>
          </div>
        </section>

        <section id="latestnews" class="news-section">
          <div class="auto-container">
            <div class="sec-title with-separator">
              <h2>Latest Press Releases</h2>

              <div class="separator">
                <span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" />
              </div>
            </div>

            <div class="carousel-box">
              <div class="news-carousel owl-theme owl-carousel">
                <!--News Block-->

                <div v-for="item in pressReleaseData" :key="item.id" class="news-block">
                  <div class="inner-box">
                    <div class="image-box">
                      <figure class="image">
                        <img :src="`https://api.lagosglobal.org/api/v1/media/${item.image}`" alt="">
                      </figure>

                      <div class="hover-box">
                        <div class="link zoom-link">
                          <a style="color: inherit" :href="`https://api.lagosglobal.org/api/v1/media/${item.image}`" class="lightbox-image"><span
                            class="icon flaticon-zoom-in"
                          /></a>
                        </div>

                        <div class="link single-link">
                          <a :href="`press-release/${item.id}`"><span class="icon flaticon-link-4" /></a>
                        </div>
                      </div>
                    </div>

                    <div class="lower-box">
                      <div class="upper-info">
                        <h4><a style="color: inherit" :href="`press-release/${item.id}`">{{ item.title }} </a></h4>

                        <!--                        <div class="cat-info">-->
                        <!--                          <a href="index.html#"><span class="fa fa-folder" />Community Life</a>-->
                        <!--                        </div>-->
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

                        <!--                        <div class="comments-info">-->
                        <!--                          <a href="index.html#"><span class="fa fa-comment" /> 02</a>-->
                        <!--                        </div>-->
                      </div>

                    </div>
                  </div>

                </div>


                <!--News Block-->

                <!--                <div class="news-block">-->
                <!--                  <div class="inner-box">-->
                <!--                    <div class="image-box">-->
                <!--                      <figure class="image">-->
                <!--                        <img src="~/assets/images/resource/blog-image-2.jpg" alt="">-->
                <!--                      </figure>-->

                <!--                      <div class="hover-box">-->
                <!--                        <div class="link zoom-link">-->
                <!--                          <a href="~/assets/images/resource/blog-image-2.jpg" class="lightbox-image"><span-->
                <!--                            class="icon flaticon-zoom-in"-->
                <!--                          /></a>-->
                <!--                        </div>-->

                <!--                        <div class="link single-link">-->
                <!--                          <a href="/press-release"><span class="icon flaticon-link-4" /></a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->

                <!--                    <div class="lower-box">-->
                <!--                      <div class="upper-info">-->
                <!--                        <h4>-->
                <!--                          <a href="/press-release">African Union delegates inspects ongoing projects for possible-->
                <!--                            intervention</a>-->
                <!--                        </h4>-->

                <!--                        <div class="cat-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-folder" />Public Information</a>-->
                <!--                        </div>-->
                <!--                      </div>-->

                <!--                      <div class="meta-info clearfix">-->
                <!--                        <div class="author-info clearfix">-->
                <!--                          <div class="author-icon">-->
                <!--                            <span class="flaticon-user-3" />-->
                <!--                          </div>-->

                <!--                          <div class="author-title">-->
                <!--                            By Okeke Paul-->
                <!--                          </div>-->

                <!--                          <div class="date">-->
                <!--                            12.10.2019-->
                <!--                          </div>-->
                <!--                        </div>-->

                <!--                        <div class="comments-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-comment" /> 03</a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->

                <!--News Block-->

                <!--                <div class="news-block">-->
                <!--                  <div class="inner-box">-->
                <!--                    <div class="image-box">-->
                <!--                      <figure class="image">-->
                <!--                        <img src="~/assets/images/resource/blog-image-3.jpg" alt="">-->
                <!--                      </figure>-->

                <!--                      <div class="hover-box">-->
                <!--                        <div class="link zoom-link">-->
                <!--                          <a href="~/assets/images/resource/blog-image-3.jpg" class="lightbox-image"><span-->
                <!--                            class="icon flaticon-zoom-in"-->
                <!--                          /></a>-->
                <!--                        </div>-->

                <!--                        <div class="link single-link">-->
                <!--                          <a href="/press-release"><span class="icon flaticon-link-4" /></a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->

                <!--                    <div class="lower-box">-->
                <!--                      <div class="upper-info">-->
                <!--                        <h4><a href="/press-release">LASG to align T.H.E.M.E.S agenda with SDGs</a></h4>-->

                <!--                        <div class="cat-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-folder" />Regeneration</a>-->
                <!--                        </div>-->
                <!--                      </div>-->

                <!--                      <div class="meta-info clearfix">-->
                <!--                        <div class="author-info clearfix">-->
                <!--                          <div class="author-icon">-->
                <!--                            <span class="flaticon-user-3" />-->
                <!--                          </div>-->

                <!--                          <div class="author-title">-->
                <!--                            By Ugochukwu Okeke-->
                <!--                          </div>-->

                <!--                          <div class="date">-->
                <!--                            15.10.2019-->
                <!--                          </div>-->
                <!--                        </div>-->

                <!--                        <div class="comments-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-comment" /> 12</a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->

                <!--News Block-->

                <!--                <div class="news-block">-->
                <!--                  <div class="inner-box">-->
                <!--                    <div class="image-box">-->
                <!--                      <figure class="image">-->
                <!--                        <img src="~/assets/images/resource/blog-image-2.jpg" alt="">-->
                <!--                      </figure>-->

                <!--                      <div class="hover-box">-->
                <!--                        <div class="link zoom-link">-->
                <!--                          <a href="~/assets/images/resource/blog-image-1.jpg" class="lightbox-image"><span-->
                <!--                            class="icon flaticon-zoom-in"-->
                <!--                          /></a>-->
                <!--                        </div>-->

                <!--                        <div class="link single-link">-->
                <!--                          <a href="/press-release"><span class="icon flaticon-link-4" /></a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->

                <!--                    <div class="lower-box">-->
                <!--                      <div class="upper-info">-->
                <!--                        <h4>-->
                <!--                          <a href="/press-release">Sanwo-olu calls for equal trade partnership between UK and-->
                <!--                            AFRICA</a>-->
                <!--                        </h4>-->

                <!--                        <div class="cat-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-folder" />Community Life</a>-->
                <!--                        </div>-->
                <!--                      </div>-->

                <!--                      <div class="meta-info clearfix">-->
                <!--                        <div class="author-info clearfix">-->
                <!--                          <div class="author-icon">-->
                <!--                            <span class="flaticon-user-3" />-->
                <!--                          </div>-->

                <!--                          <div class="author-title">-->
                <!--                            By Paul Ugochukwu-->
                <!--                          </div>-->

                <!--                          <div class="date">-->
                <!--                            24.12.2019-->
                <!--                          </div>-->
                <!--                        </div>-->

                <!--                        <div class="comments-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-comment" /> 02</a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->

                <!--News Block-->

                <!--                <div class="news-block">-->
                <!--                  <div class="inner-box">-->
                <!--                    <div class="image-box">-->
                <!--                      <figure class="image">-->
                <!--                        <img src="~/assets/images/resource/blog-image-2.jpg" alt="">-->
                <!--                      </figure>-->

                <!--                      <div class="hover-box">-->
                <!--                        <div class="link zoom-link">-->
                <!--                          <a href="~/assets/images/resource/blog-image-2.jpg" class="lightbox-image"><span-->
                <!--                            class="icon flaticon-zoom-in"-->
                <!--                          /></a>-->
                <!--                        </div>-->

                <!--                        <div class="link single-link">-->
                <!--                          <a href="/press-release"><span class="icon flaticon-link-4" /></a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->

                <!--                    <div class="lower-box">-->
                <!--                      <div class="upper-info">-->
                <!--                        <h4><a href="/press-release">Last chance to get your tickets for christmas fireworks</a></h4>-->

                <!--                        <div class="cat-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-folder" />Public Information</a>-->
                <!--                        </div>-->
                <!--                      </div>-->

                <!--                      <div class="meta-info clearfix">-->
                <!--                        <div class="author-info clearfix">-->
                <!--                          <div class="author-icon">-->
                <!--                            <span class="flaticon-user-3" />-->
                <!--                          </div>-->

                <!--                          <div class="author-title">-->
                <!--                            By Eve Nnaji-->
                <!--                          </div>-->

                <!--                          <div class="date">-->
                <!--                            12.10.2019-->
                <!--                          </div>-->
                <!--                        </div>-->

                <!--                        <div class="comments-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-comment" /> 03</a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->

                <!--News Block-->

                <!--                <div class="news-block">-->
                <!--                  <div class="inner-box">-->
                <!--                    <div class="image-box">-->
                <!--                      <figure class="image">-->
                <!--                        <img src="~/assets/images/resource/blog-image-3.jpg" alt="">-->
                <!--                      </figure>-->

                <!--                      <div class="hover-box">-->
                <!--                        <div class="link zoom-link">-->
                <!--                          <a href="~/assets/images/resource/blog-image-3.jpg" class="lightbox-image"><span-->
                <!--                            class="icon flaticon-zoom-in"-->
                <!--                          /></a>-->
                <!--                        </div>-->

                <!--                        <div class="link single-link">-->
                <!--                          <a href="/press-release"><span class="icon flaticon-link-4" /></a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->

                <!--                    <div class="lower-box">-->
                <!--                      <div class="upper-info">-->
                <!--                        <h4><a href="/press-release">Lagos, Malaysia partner on investment promotion</a></h4>-->

                <!--                        <div class="cat-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-folder" />Regeneration</a>-->
                <!--                        </div>-->
                <!--                      </div>-->

                <!--                      <div class="meta-info clearfix">-->
                <!--                        <div class="author-info clearfix">-->
                <!--                          <div class="author-icon">-->
                <!--                            <span class="flaticon-user-3" />-->
                <!--                          </div>-->

                <!--                          <div class="author-title">-->
                <!--                            By Tumi Adeyemi-->
                <!--                          </div>-->

                <!--                          <div class="date">-->
                <!--                            15.10.2019-->
                <!--                          </div>-->
                <!--                        </div>-->

                <!--                        <div class="comments-info">-->
                <!--                          <a href="index.html#"><span class="fa fa-comment" /> 12</a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="see-all text-right text-dark mt-5 font-weight-bold">
              <a href="/press-release"><span class="arrow flaticon-right-2" /> View All Press Release</a>
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

          <div class="separator">
            <span class="cir c-1" /><span class="cir c-2" /><span class="cir c-3" />
          </div>
        </div>
        <div class="row clearfix">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="col-inner">
              <div class="top-companies-carousel owl-carousel owl-theme">
                <img
                  src="~/assets/images/nestle_company.png"
                  width="100"
                  height="100"
                  alt="nestle"
                  class="company-image"
                >
                <img src="~/assets/images/chevron.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/total_comp.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/kpmg.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/shell.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/andela.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/mtn.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/dangote.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/exon_mobile.png" width="100" height="100" alt="nestle" class="company-image">
                <img src="~/assets/images/nnpc.png" width="100" height="100" alt="nestle" class="company-image">
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

<script>
import ScrollTop from '@/components/ScrollTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchPopup from '../components/SearchPopup'
import bannerImageOne from '~/assets/images/main-slider/1.jpg'
import bannerImageTwo from '~/assets/images/main-slider/2.jpg'
import bannerImageThree from '~/assets/images/main-slider/3.jpg'
import patternImage from '~/assets/images/background/pattern-1.png'
import testimonialBackground from '~/assets/images/background/image-2.jpg'
import suggestionBackground from '~/assets/images/background/image-5.jpg'
import sanwoOluBackground from '~/assets/images/background/image-1-test.jpg'
import backgroundUrl from '~/assets/images/background/bcimage.png'

export default {
  components: {
    ScrollTop,
    Header,
    SearchPopup,
    Footer
  },
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },
  async asyncData ({ $axios, $config }) {
    const events = await $axios.$get('/events')
    const stories = await $axios.$get('/stories')
    const pressRelease = await $axios.$get('/posts')
    const storyData = stories.data.length > 2 ? stories.data.slice(0, 2) : stories.data
    const eventsData = events.data.length > 4 ? events.data.slice(0, 4) : events.data
    const pressReleaseData = pressRelease.data.length > 4 ? pressRelease.data.slice(0, 4) : pressRelease.data
    return { eventsData, storyData, pressReleaseData }
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
      isEnvironment: true,
      isHealth: false,
      isAgriculture: false,
      isHousing: false,
      isTransportation: false,
      isTourism: false,
      isIct: false,
      isPower: false,
      isOil: false,
      isEducation: false,
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    }
  },
  methods: {
    environment () {
      this.isEnvironment = true
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    health () {
      this.isEnvironment = false
      this.isHealth = true
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    agriculture () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = true
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    housing () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = true
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    transportation () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = true
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    tourism () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = true
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    ict () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = true
      this.isPower = false
      this.isOil = false
      this.isEducation = false
    },
    power () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = true
      this.isOil = false
      this.isEducation = false
    },
    oil () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = true
      this.isEducation = false
    },
    education () {
      this.isEnvironment = false
      this.isHealth = false
      this.isAgriculture = false
      this.isHousing = false
      this.isTransportation = false
      this.isTourism = false
      this.isIct = false
      this.isPower = false
      this.isOil = false
      this.isEducation = true
    }
  }

}
</script>

<style>
  .barometer-section{
    background: url(~assets/images/blue-dark-bg.jpg);
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
