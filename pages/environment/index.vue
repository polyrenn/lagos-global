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
              <div class="w-100 text-center africa-global-city text-uppercase">
                Environment
              </div>
              <!--              <div class="mt-3 env-banner-text">-->
              <!--                All five (5) of the Sanwo-Olu administration take place in the <br> environment, and can impact on human health and well-being if <br> environmental protection is poor.-->
              <!--              </div>-->
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: #FCFFFA">
          <div class="auto-container">
            <div class="evn-header text-center mb-5">
              Key Highlights
            </div>
            <div class="row env-body">
              <div class="col-sm-6 d-flex justify-content-center">
                <div>
                  <!--                  <div class="d-flex align-items-center">-->
                  <!--                    <div class="env-ml-2">-->
                  <!--                      <img src="~/assets/images/env-icon7.png">-->
                  <!--                    </div>-->
                  <!--                    <div class="ml-4">-->
                  <!--                      Generates <span class="font-weight-bold">11, 000 metric</span> <br> tonnes of waste daily-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                  <div class="d-flex align-items-center mt-5">
                    <div>
                      <img src="~/assets/images/env-icon3.png">
                    </div>
                    <div class="ml-4">
                      Estimate to provide <br> <span class="font-weight-bold">500, 000</span> jobs
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-5">
                    <div>
                      <img src="~/assets/images/env-icon5.png">
                    </div>
                    <div class="ml-4">
                      Government plans to progressively <br> increase waste processing capacity <br> from <span class="font-weight-bold">18%</span> in <span class="font-weight-bold">2011</span> to <span class="font-weight-bold">60%</span> in <span class="font-weight-bold">2025</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center env-margin">
                <div>
                  <div class="d-flex align-items-center">
                    <div>
                      <img src="~/assets/images/env-icon2.png">
                    </div>
                    <div class="ml-4">
                      Largest producer of compost in <br> Africa converting <span class="font-weight-bold">600</span> tonnes of <br> waste into compost
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-5">
                    <div>
                      <img src="~/assets/images/env-icon4.png">
                    </div>
                    <div class="ml-4">
                      Over <span>50%</span> of the waste generated <br> in the state (biodegradable waste) <br> can be used for compositing
                    </div>
                  </div>
                  <div class="d-flex align-items-center mt-5">
                    <div>
                      <img src="~/assets/images/env-icon6.png">
                    </div>
                    <div class="ml-4">
                      Projected population to be over <br> <span class="font-weight-bold">30million</span> in <span class="font-weight-bold">2025</span> with <span class="font-weight-bold">0.5kg-0.65kg</span> of <br> waste generated/person/day
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style=" background-size: 100% 100%;" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
          <div class="auto-container">
            <div class="row env-card-body">
              <div class="col-sm-6 d-flex justify-content-end">
                <div class="w-50 env-card py-5 px-3">
                  The growing population of the state generate a huge amount of waste to be recycled (about 17% of the total waste generated in the country)
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-end">
                <div class="w-50 env-card py-5 px-3 h-100">
                  Only a small percentage of watse is currently being recycled (18%). This leaves a large market to be penetrated.
                </div>
              </div>
            </div>
            <div class="row env-card-body mt-4">
              <div class="col-sm-6 d-flex justify-content-end">
                <div class="w-50 env-card py-5 px-3 h-100" style="height: fit-content">
                  About 60% of the waste generated in Lagos uncollected.
                </div>
              </div>
              <div class="col-sm-6">
                <div class="w-50 env-card py-5 px-3">
                  Increasing awareness of residenta on waste management procedures such as the seperation of waste through deployment of about 1,000 recycling banks in the states by the waste management authority.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #FCFFFA">
          <div class="auto-container">
            <div class="evn-header text-center mb-5">
              Waste to Wealth Strategies
            </div>
            <div class="row">
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/env31.png">
              </div>
              <div class="col-sm-6 px-5">
                <div class="env-heading2 mb-3">
                  Waste Recycling
                </div>
                <div class="env-body2">
                  <div class="d-flex">
                    <div class="p-2" style="height: fit-content">
                      <div style="height: 8px;width: 8px;background-color: #0C7B3F; border-radius: 50%" />
                    </div>
                    <div class="ml-3">
                      A huge amount of waste is generated in the state of which a quarter of it can be recycled. Lagos state currently has a recycling capacty of about 18% with the potential to reach 60% in 2025. An integrated recylcing plant to recycle waste, Paper, glass and metals is neeeded to arrive at its full recycling potential..
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div class="p-2" style="height: fit-content">
                      <div style="height: 8px;width: 8px;background-color: #0C7B3F; border-radius: 50%" />
                    </div>
                    <div class="ml-3">
                      E-waste in the state amounts to over 50,000 tonnes. the State has a disposal site covering over 2 acres of land for the collection of this waste
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon11.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      About <span class="font-weight-bold">$12,500</span> (small scale);  <span class="font-weight-bold">$50,000</span> (large scale) <br>
                      Spent largely on setting up the recycling plant
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon9.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="env-ml">
                      Payback Period: <span class="font-weight-bold">3 years</span>
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon10.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="env-ml">
                      ROI: over <span class="font-weight-bold">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="env-heading3 text-center mb-5">
              Waste to Energy
            </div>
            <div class="env-body2 d-flex justify-content-center">
              <div class="env-waste-width text-center">
                The state has plans to generate 50MW of electricity from waste by capturing gas at waste disposal sites. This will be done at the two major land fills of the stateone of which receives about 40% of the waste disposed in <br> the state with a potential to generate 25MW-30MW of electricity . The state has currently been able to generate 5MW of electricity through partnership seeks to improve on this with further investments
              </div>
            </div>
            <div class="row env-body2 mt-5 env-pad">
              <div class="col-sm-4 d-flex justify-content-sm-center">
                <div class="d-flex mt-4">
                  <div style="height: 60px; width: 60px">
                    <img src="~/assets/images/env-icon11.png" style="height: 40px; width: 40px">
                  </div>
                  <div class="ml-3">
                    #15 milllion-$20 million <br>
                    Spent largely on setting <br> up the recycling plant
                  </div>
                </div>
              </div>
              <div class="col-sm-4 d-flex justify-content-sm-center">
                <div class="d-flex mt-4" style="width: fit-content">
                  <div style="height: 60px; width: 60px">
                    <img src="~/assets/images/env-icon10.png" style="height: 40px; width: 40px">
                  </div>
                  <div class="ml-3">
                    ROI: over <span class="font-weight-bold">30%</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="d-flex mt-4">
                  <div style="height: 60px; width: 60px">
                    <img src="~/assets/images/env-icon9.png" style="height: 40px; width: 40px">
                  </div>
                  <div class="ml-3">
                    Payback Period: <span class="font-weight-bold">3 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #FCFFFA">
          <div class="auto-container">
            <div class="row flex-column-reverse flex-sm-row">
              <div class="col-sm-6 px-5">
                <div class="env-heading2 mb-3">
                  Waste Collection
                </div>
                <div class="env-body2">
                  <div class="d-flex">
                    <div class="p-2" style="height: fit-content">
                      <div style="height: 8px;width: 8px;background-color: #0C7B3F; border-radius: 50%" />
                    </div>
                    <div class="ml-3">
                      Lagos state requires about 800 waste collection trucks for efficient transport of refuse. The state currently operates lesss than 500 trucks with the input of local companies. This leaves a shortfall of over 200 trucks.
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon11.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      About <span class="font-weight-bold">$150,000/unit</span> of collection of trucks
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon9.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      Payback Period: <span class="font-weight-bold">10 years</span>
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon10.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      ROI: <span class="font-weight-bold">10%-15%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/env32.png">
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="row">
              <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <img src="~/assets/images/env-img3.png">
              </div>
              <div class="col-sm-6 px-5">
                <div class="env-heading2 mb-3" style="color: #0C7B3F">
                  Waste Compositing
                </div>
                <div class="env-body2">
                  <div class="d-flex">
                    <div class="p-2" style="height: fit-content">
                      <div style="height: 8px;width: 8px;background-color: #0C7B3F; border-radius: 50%" />
                    </div>
                    <div class="ml-3">
                      Lagos being the largest producer of compost in Africa converts 600 tonnes of waste genrated in the state, organice watse is over 50% with only 10% of this currently being recycled. The current plant converts 850 metric tonnes of waste yearly with less than 10million being supplied. The with less than 10million being supllied. The fertilizer generated can be sold within the country to a large market of local farmers.
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon11.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      Investment Required: About <span class="font-weight-bold">$20,000 million</span> <br> Spent largely on construction of compost
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon9.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      Payback Period: <span class="font-weight-bold">30 years</span>
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                    <div style="height: 60px; width: 60px">
                      <img src="~/assets/images/env-icon10.png" style="height: 40px; width: 40px">
                    </div>
                    <div class="ml-3">
                      ROI: <span class="font-weight-bold">30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style="background-color: #FCFFFA;padding-top: 50px;margin-top: 50px;padding-bottom: 100px">
          <div class="auto-container">
            <div class="env-heading2 mb-5 text-center" style="color: #0C7B3F">
              Other Investment Opportunities
            </div>
            <div id="accordion">
              <div class="card">
                <div id="headingTwo" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed env-heading4 d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      style="text-decoration: none"
                    >
                      Integrated used oil collection and waste oil recycling plant
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          - Mismanagement of used oil in the state
                        </p>
                        <p>
                          - Poor collection system
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          - Establishment of a waste Oil Recycling
                          Plant in Lagos
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          - Lagos State Environmental
                          Management and Protection Law 2017 VI
                        </p>
                        <p>
                          - There is a used oil and oily waste policy
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          With more automobiles and industries than most states in the country the volume of used oil generation will be substantial job creation for collections, transporters and recyclers
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          Cleaner environment, water bodies will be safe from oil pollution lands will be free from indiscrimate oild pollution and soil degradation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="headingThree" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed env-heading4 d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      style="text-decoration: none"
                    >
                      AIR QUALITY MONITORING STATIONS AND A LAGOS STATE METEOROLOGICAL CENTRE
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          Lagos State depends on Nigeria Meteorological centre for its weather forecast which is often provided occassionally while Air Monitoring Stations are yet to be established in all LGAs
                        </p>

                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          Establishment of State owned Meteorological and air monitoring stations
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          - Lagos State Environmental
                          Management and Protection Law 2017 VI
                        </p>
                        <p>
                          - The Agency (LASEPA) regulates Air Quality standards
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          With more automobiles and industries Research Studies, agriculture, weather forecast, flood predictions and lots more
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          With constant review of air quality standards and weather forcasts safe communities in Lagos can be checked and abated.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="headingFour" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading4 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      style="text-decoration: none"
                    >
                      communal industrial effluent treatment plant (etp) in all industrial zones
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          There are no functional communal industrial Effluent Treatment Plant (ETP)
                        </p>

                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          Establishment of communal industrial Effluent Treatment Plants
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          - Lagos State Environmental
                          Management and Protection Law 2017 VI
                        </p>
                        <p>
                          - The Agency (LASEPA) regulates effluent
                          limitation standards and discharge
                          permits
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          Partnership with industrial facilities in industrial areas of the states
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          Discharge of untreated waste water is responsible for pollution of water bodies which imapacts negatively on entertainment and tourism potentials of the state.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="headingFive" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading4 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      style="text-decoration: none"
                    >
                      upgrade of agency laboratory services and a centre for energy research and development
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          The agency has a laboratory Services Department in analysing all environmental parameters and samples within the State
                        </p>

                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          Upgrade of Agency Laboratory Services with modern equipment and as a centre for energy research and development in West Africa
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          Lagos State Environmental
                          Management and Protection Law 2017 VI
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          Offers laboratory services to public and private institutions within and outside the state
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          Sampling and determination of analysis will provide quantitative report on the environmental status of the State ad Safety of the masses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="headingSix" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading4 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                      style="text-decoration: none"
                    >
                      Vehicular emissions regulation and monitoring
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          Vehicular pollution is increasing but testing capacities are inadequate for prosecution and enforcement
                        </p>

                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          Partnership with the Agency on Vehicular Emission monitoring, testing and enforcement across the State.
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          Lagos State Environmental Management and Protection Law 2017 VI
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          Job creation, training opportunities
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          Clean air for Lagos State and improved life expectancy and public health
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div id="headingSeven" class="card-header">
                  <h5 class="mb-0">
                    <button
                      class="env-heading4 btn btn-link collapsed d-flex align-items-center justify-content-between w-100"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                      style="text-decoration: none"
                    >
                      Mass production of biodegradable eco-friendly shopping bags to replace single use plastic bags
                      <i class="fas fa-plus" style="color: #0C7B3F" />
                    </button>
                  </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                  <div class="card-body">
                    <div class="row env-body3">
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          CURRENT STATUS
                        </div>
                        <p>
                          Pollution of drainages, water bodies and environment with single use of plastic bags
                        </p>

                        <div class="font-weight-bold mb-2 mt-5">
                          INVESTMENT DEAL
                        </div>
                        <p>
                          mass production of eco-friendly biodegradable bags produced by the Agency
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ADMINISTRATIVE AND LEGISLATIVE FRAMEWORK
                        </div>
                        <p>
                          Lagos State Environmental Management and Protection Law 2017 VI
                        </p>
                      </div>
                      <div class="col-sm-6 p-5">
                        <div class="font-weight-bold mb-2">
                          AVAILABLE OPPORTUNITIES
                        </div>
                        <p>
                          Collection and conversion of plastic materials into useful resource materials
                        </p>
                        <div class="font-weight-bold mb-2 mt-5">
                          ENVIRONMENTAL IMPACT
                        </div>
                        <p>
                          Cleaner environment, good drainages , plastic pollution free society
                        </p>
                      </div>
                    </div>
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
import backgroundUrl from '~/assets/images/background/env30.png'
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
