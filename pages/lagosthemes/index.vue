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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;background-size: 100% 100%" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center">
              <div class="w-100 text-center africa-global-city text-uppercase">
                LAGOS THEMES <br> MEETS GLOBAL SDGs
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->
        <section class="about-section" style="background-color: #FFFFFF">
          <div class="auto-container text-center p-5 w-100 rounded" style="background-color: #F4F4F4">
            <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="our-text pb-5 text-center">
              LAGOS THEMES MEETS GLOBAL SDGs
            </div>
            <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <img src="~/assets/images/lagos-theme.png" class="themes">
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
                <img src="~/assets/images/sdg-poverty.png">
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
                <img src="~/assets/images/sdg-hunger.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Challenges malnutrition, unsustainable agricultural practices, and systems that propagate unsustainable food production systems; calls for safe, nutritious, and sufficient food throughout all seasons for all persons (esp. in least developed countries).
                </p>
                <div id="accordion">
                  <div>
                    <div id="headingTwo">
                      <p>
                        In order to achieve Goal 2, agricultural productivity must double as well as the incomes of small scale farmers. Other targets that lie under this goal are:

                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <p>
                        Elimination of wasting and stunting of children under 5 years of age
                      </p>
                      <p>
                        Increased secure and equal access to land.
                      </p>
                      <p>
                        Establishing diversified seed banks to preserve genetic diversity.
                      </p>
                      <p>
                        Efficient exchange of both modern and traditional farming practice knowledge.
                      </p>
                      <p>
                        Establishing financial services that market opportunities for value addition and non-farm employment.
                      </p>
                      <p>
                        Increasing and improving rural infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>

            <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5 reverse" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  Tackles reducing the global mortality ratio and promotes well-being in all age groups. It calls for action in ending preventable deaths by increasing access to communicable disease vaccines and medicines (i.e. HIV/AIDS, malaria, TB etc.) and challenges health care sectors to eradicate non-communicable disease (cancers, diabetes, hypertension etc.) by a third, globally.
                </p>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #2B9B49">
                <img src="~/assets/images/sdg-health.png">
              </div>
            </div>

            <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse  mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  Ensures inclusive, equitable, and quality education for girls and boys at all levels (as well as vocational and technical training institutions) so that they experience efficient outcomes and occupations to sustain life.
                </p>
                <div id="accordion2">
                  <div>
                    <div id="headingTwo2">
                      <p>
                        It also calls for elimination of disparities in gender, disability, and unequal access for those in vulnerable situations so that they too, can support themselves later in life.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                      <p>
                        It stresses importance of ensuring literacy and numeracy in both young and old populations and encourages the creation of an international curriculum that covers topics such as:
                      </p>
                      <p>
                        Sustainable development and lifestyles.
                      </p>
                      <p>
                        Human rights and gender equality
                      </p>
                      <p>
                        Promotion of peace and non-violence
                      </p>
                      <p>
                        Global citizenship
                      </p>
                      <p>
                        Appreciation for cultural diversity and its contribution to sustainable development
                      </p>
                      <p>
                        Finally, it calls for new and upgraded educational facilities that are child, disability, and gender sensitive and that promote safe, non-violent, inclusive and effective learning environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #C42738">
                <img src="~/assets/images/sdg-education.png">
              </div>
            </div>

            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #ED432C">
                <img src="~/assets/images/sdg-gender.png">
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

            <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  The importance of this goal is to ensure availability and sustainable management of water and sanitation for all. This is one of the most pressing of the SDGs; it includes emphasis to end open defecation and to aid women, girls, and those with disabilities in vulnerable situations.
                </p>
                <div id="accordion3">
                  <div>
                    <p id="headingTwo3" /><div>
                      It also challenges nations to reduce pollution, eliminate dumping, minimize release of hazardous chemicals and materials, halve the proportion of untreated wastewater, and increase recycling and safe reuse globally.
                      <a
                        class="collapsed text-danger"
                        data-toggle="collapse"
                        data-target="#collapseTwo3"
                        aria-expanded="false"
                        aria-controls="collapseTwo3"
                      >
                        Read More
                      </a>
                    </div>
                    </p>
                    <div id="collapseTwo3" class="collapse" aria-labelledby="headingTwo3" data-parent="#accordion3">
                      <p>
                        Finally, it calls for international support, cooperation, and capacity building for developing countries regarding water related activities such as harvesting, desalinization, and waste-water treatment. While this may be an investment initially, it will strengthen the participation of local communities improving their water quality and sanitation management for the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #00ADD8">
                <img src="~/assets/images/sdg-water.png">
              </div>
            </div>

            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color:  #FBB617">
                <img src="~/assets/images/sdg-energy.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Aim is to ensure access to affordable, reliable, and sustainable modern energy for all. Importance is placed on diversifying the market and increasing the share of renewable energy into the global energy mix—that way more stakeholders and everyday citizens can bear the expense of switching to clean energy.
                </p>
                <p>
                  This will help create incentive to achieve other targets under this goal such as doubling the rate of efficiency improvement, enhancing international cooperation to facilitate access to energy research and technology, particularly in renewable energy, energy efficiency, and advanced/cleaner fossil fuel technology; and promoting investments in energy infrastructure.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  While strengthening GDP (Gross domestic product) is important for a prosperous and productive economy, it only scratches the surface for this goal—to promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
                </p>
                <div id="accordion4">
                  <div>
                    <div id="headingTwo4">
                      <p>
                        It encourages developed countries to maintain their GDP growth in line with national circumstances and encourages at least 7 per cent growth in developing and least developed countries.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo4"
                          aria-expanded="false"
                          aria-controls="collapseTwo4"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo4" class="collapse" aria-labelledby="headingTwo4" data-parent="#accordion3">
                      <p>
                        Targets are set to increase diversification, technological upgrading and innovation, and focus on high-added value and labour-intensive sectors and to promote development-oriented policies that support decent work for all women and men, young persons, persons with disabilities, entrepreneurship, creativity and innovation, encouragement of growth for micro, small, and medium sized enterprises through access to necessary financial services.
                      </p>
                      <p>
                        Goal 8 maintains tat gender equality and equal education is central for this goal in addition to the eradication of child labour. It also stresses increasing the capacity of domestic financial institutions to expand access to banking, insurance, and other financial services for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #962E47">
                <img src="~/assets/images/sdg-economy.png">
              </div>
            </div>

            <div data-aos="fade-up-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #F16F24">
                <img src="~/assets/images/sdg-industry.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  The objective for this goal is to build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation. Targets are set to provide regional and trans-border infrastructure and affordable and equitable access to such services for all.
                </p>
                <p />
                <div id="accordion5">
                  <div>
                    <div id="headingTwo5">
                      <p>
                        It maintains that raising industry’s share of employment and GDP should come at no unnecessary cost to the environment, and that operations are performed under an environmentally sustainable perspective.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo5"
                          aria-expanded="false"
                          aria-controls="collapseTwo5"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo5" class="collapse" aria-labelledby="headingTwo5" data-parent="#accordion5">
                      <p>
                        Enhancing scientific research is paramount here. This includes a target aiming to encourage innovation and increasing research/development workers per 1 million. Domestic technological development is another objective under this goal such as increasing universal access to information and communication technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <div id="accordion6">
                  <div>
                    <div id="headingTwo6">
                      <p>
                        Aims to reduce inequality within and among countries; countries should achieve and sustain income growth to the bottom 4 per cent of the population at a rate higher than the national average. In turn, this will increase empowerment, social promotion, and political inclusions for all, irrespective of age, sex, disability, race, ethnicity, origin, religion, or economic status.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo6"
                          aria-expanded="false"
                          aria-controls="collapseTwo6"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo6" class="collapse" aria-labelledby="headingTwo6" data-parent="#accordion6">
                      <p>
                        Targets also focus on ensuring safe, regular, and responsible migration policies as well as a reduction by at least 3 per cent of the remittance transfer prices for migrants and their families. This also calls for the elimination of remittance corridors charging over 5 per cent fees and to ensure safe and regulated migration practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #DF1C84">
                <img src="~/assets/images/sdg-reduced.png">
              </div>
            </div>

            <div data-aos="fade-down-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #F79C26">
                <img src="~/assets/images/sdg-city.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Make cities and human settlements inclusive, safe, resilient, and sustainable. Urbanization along with overall population growth could add another 2.5 billion people to urban populations by 2050.
                </p>
                <p>
                  Therefore, targets specified in this goal have much to do with providing adequate and equitable services to accommodate the large influx of people moving to urban areas and the opportunities to promote sustainable lifestyles as a result.
                </p>
              </div>
            </div>

            <div data-aos="fade-down-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <div id="accordion7">
                  <div>
                    <div id="headingTwo7">
                      <p>
                        Sustainable consumption and production is about promoting resource and energy efficiency, sustainable infrastructure, and providing access to basic services, green and decent jobs and a better quality of life for all. Its implementation helps to achieve overall development plans, reduce future economic, environmental and social costs, strengthen economic competitiveness and reduce poverty.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo7"
                          aria-expanded="false"
                          aria-controls="collapseTwo7"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo7" class="collapse" aria-labelledby="headingTwo7" data-parent="#accordion7">
                      <p>
                        Since sustainable consumption and production aims at “doing more and better with less,” net welfare gains from economic activities can increase by reducing resource use, degradation and pollution along the whole life cycle, while increasing quality of life.
                      </p>
                      <p>
                        There also needs to be significant focus on operating on supply chain, involving everyone from producer to final consumer. This includes educating consumers on sustainable consumption and lifestyles, providing them with adequate information through standards and labels and engaging in sustainable public procurement, among others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #CD8C2E">
                <img src="~/assets/images/sdg-responsible.png">
              </div>
            </div>

            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color:#4e7a47">
                <img src="~/assets/images/sdg-climate.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  The main purpose for this goal is to strengthen the resilience and adaptive capability to climate related hazards and natural disasters in all countries, with emphasis on the least developed.
                </p>
                <div id="accordion8">
                  <div>
                    <div id="headingTwo8">
                      <p>
                        This is especially important in vulnerable communities within least developed populations such as women, youth, as well as marginalized communities. Integrating climate change measures into national policies, strategies, and planning is a target all countries should hit.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo8"
                          aria-expanded="false"
                          aria-controls="collapseTwo8"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo8" class="collapse" aria-labelledby="headingTwo8" data-parent="#accordion8">
                      <p>
                        Furthermore, improving education, awareness-raising and human institutional capacity for the sustainability of climate change mitigation, adaptation, impact reduction, and early warning is also discussed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse  mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  The goal includes targets for prevention and reduction of marine pollution from land based activities (debris, nutrient pollution). It also stresses the protection and conservation of at least 10 per cent of coastal marine areas as well as minimizing ocean acidification.
                </p>
                <p>
                  Additional targets include:
                </p>
                <div id="accordion9">
                  <div>
                    <div id="headingTwo9">
                      <p>
                        Regulation of overharvesting and fishing as well as other destructive fishing practices
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo9"
                          aria-expanded="false"
                          aria-controls="collapseTwo9"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo9" class="collapse" aria-labelledby="headingTwo9" data-parent="#accordion9">
                      <p>
                        Taking immediate action on restoring fish stocks to levels that produce sustainable maximum yield in line with biological characteristics
                      </p>
                      <p>
                        Increasing economic benefits to those least developed nations who rely on the industry: promoting/investing in sustainable fishing, aquaculture, and tourism
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color:#007cbb">
                <img src="~/assets/images/sdg-life.png">
              </div>
            </div>

            <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color:#3dae4a">
                <img src="~/assets/images/sdg-land.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  Aim is to protect, restore, and promote sustainable use of terrestrial ecosystems, combat deforestation and desertification, and halt/reverse land degradation and biodiversity loss.
                </p>
                <div id="accordion10">
                  <div>
                    <div id="headingTwo10">
                      <p>
                        This goal is also central to maintaining habitable conditions for life. Targets are set to ensure conservation, restoration, and sustainable use of terrestrial ecosystems and their services which, much like marine ecosystems, warrant an urgent response.
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo10"
                          aria-expanded="false"
                          aria-controls="collapseTwo10"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo10" class="collapse" aria-labelledby="headingTwo10" data-parent="#accordion10">
                      <p>
                        This goal targets:
                      </p>
                      <p>
                        Restoring degraded soil
                      </p>
                      <p>
                        Protecting and preventing the extinction of threatened species
                      </p>
                      <p>
                        Ending poaching and trafficking of protected species; address the demand and supply of illegal wildlife products
                      </p>
                      <p>
                        Integrating ecosystem and biodiversity values into national and local planning
                      </p>
                      <p>
                        Significantly increasing financial support from all sources to sustainably use biodiversity and ecosystems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white reverse  mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-9 p-5">
                <p>
                  Aims to promote peaceful and inclusive societies, access to justice for all, and build effective, accountable, and inclusive institutions at all levels. It holds that development is best possible in the presence of peaceful and non-violent societies. This means…
                </p>
                <p>
                  Ending abuse, exploitation, trafficking, illicit financial and illegal arms flows, corruption, and bribery
                </p>
                <p />
                <div id="accordion11">
                  <div>
                    <div id="headingTwo11">
                      <p>
                        Strengthening representation of developing countries in global governance
                        <a
                          class="collapsed text-danger"
                          data-toggle="collapse"
                          data-target="#collapseTwo11"
                          aria-expanded="false"
                          aria-controls="collapseTwo11"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                    <div id="collapseTwo11" class="collapse" aria-labelledby="headingTwo11" data-parent="#accordion11">
                      <p>
                        Developing effective, accountable, and transparent institutions at all levels
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #01578b">
                <img src="~/assets/images/sdg-peace.png">
              </div>
            </div>

            <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row bg-white  mt-5" style="box-shadow: 0px 4px 50px rgba(125, 125, 125, 0.1);">
              <div class="col-sm-3 d-flex align-items-center justify-content-center" style="background-color: #27426d">
                <img src="~/assets/images/sdg-goals.png">
              </div>
              <div class="col-sm-9 p-5">
                <p>
                  The final goal deals with effective ways to facilitate and accelerate development through strengthening and revitalizing global partnerships. The main objectives of this goal cover five specific areas: finance, technology, capacity building, trade, and systematic issue.
                </p>
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
import backgroundUrl from '~/assets/images/background/bcimage.png'

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
