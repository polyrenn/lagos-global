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
          <div class="dashboard-inner" style="background-color:#FFFFFF; height: 400px;" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.7) -9.68%, rgba(25, 53, 102, 0.7) 59.8%), url(${backgroundUrl})` }">
            <!--            <canvas id="dashboard-report" />-->
            <div class="h-100 d-flex justify-content-center align-items-center">
              <div class="w-100 text-center africa-global-city text-uppercase">
                Investment Incentives
              </div>
            </div>
          </div>
          <!-- Slide Item -->
        </section>

        <!--End Banner Section -->

        <!--Facts Section-->

        <section style="background-color: white; padding: 110px 0px 70px;">
          <div class="auto-container">
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="incentive-heading">
              TRADE INCENTIVES & TAX
            </div>
            <div class="row mt-5 pt-3">
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-6 incentive-body p-5">
                In creating a conducive business environment, the Lagos State government has put in place a wide range of fiscal incentives. Some of the main incentives are import concessions, tax exemption for exported products and tax reductions for qualifying companies
              </div>
              <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-6 align-items-center justify-content-center d-flex">
                <img src="~/assets/images/incentive2.png">
              </div>
            </div>
          </div>
        </section>

        <section style="background-color:  white; padding: 110px 0px 70px; background-size: 100% 100%; background-repeat: no-repeat" :style="{ backgroundImage: `linear-gradient(303.69deg, rgba(7, 26, 53, 0.1) -9.68%, rgba(25, 53, 102, 0.1) 59.8%), url(${backgroundUrl2})` }">
          <div class="auto-container">
            <div
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              style="font-style: normal;
                       font-weight: normal;
                       font-size: 32px;
                      line-height: 153%;
                      text-align: center;
                      color: #FFFFFF;"
            >
              Lagos State has a robust tax system coupled <br> with favourable trade incentives
            </div>
            <div class="row text-white mt-5">
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2">
                <div class="incentive-chart-heading">
                  30%
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="incentive-chart-body">
                  Companies Income Tax (CIT)
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2 graph-margin2">
                <div class="incentive-chart-heading">
                  2%
                </div>
                <div class="incentive-chart-body">
                  Education Tax (ET)
                </div>
              </div>
              <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2 graph-margin2">
                <div class="incentive-chart-heading">
                  10%
                </div>
                <div class="incentive-chart-body">
                  Withholding Tax (WHT)
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2 graph-margin2">
                <div class="incentive-chart-heading">
                  5%
                </div>
                <div class="incentive-chart-body">
                  Value Added Tax (VAT)
                </div>
              </div>
              <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2 graph-margin2">
                <div class="incentive-chart-heading">
                  10%
                </div>
                <div class="incentive-chart-body">
                  Capital Gains Tax (CGT)
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="col-sm-2 graph-margin2">
                <div class="incentive-chart-heading">
                  1%
                </div>
                <div class="incentive-chart-body">
                  Information Technology Tax
                </div>
              </div>
            </div>
            <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="incentive-body-small mt-5">
              <div>
                IT Taxes are paid by companies with turnover of above $500,000
              </div>
              <div>
                All companies are to pay taxes to the Federal Inland Revenue Service
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section style="background: rgb(91,183,74, 0.1);padding: 110px 0px 70px;">
      <div class="auto-container">
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="sec-incentive-heading">
          SECTORIAL INCENTIVES
        </div>
        <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="sec-incentive-body">
          Companies that take advantage of the incentives <br> will be able to set up proper structures
        </div>
        <div class="table-responsive-sm">
          <div style="position: sticky; top: 90px;z-index: 2;" class="row incentive-table-heading px-5 py-3 mt-5 text-center table-width">
            <div class="col-2 incentive-table-text">
              Sector
            </div>
            <div class="col-4 incentive-table-text">
              Trade Incentives
            </div>
            <div class="col-2 incentive-table-text">
              Tax
            </div>
            <div class="col-4 incentive-table-text">
              Regulatory Bodies
            </div>
          </div>
          <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Housing
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Lagos State is willing to offer these incentives to encourage investment in the housing sector
              </p>
              <p class="w-100">
                Subsidizing statutory fees for PPP participants
              </p>
              <p class="w-100">
                Fast-tracking the issuance of land titles, to enable investors obtain funding quicker
              </p>
              <div class="font-weight-bold w-100 mb-2">
                Tax related incentives also include:
              </div>
              <p class="w-100">
                Zero tax on rental income during pioneer period
              </p>
              <p class="w-100">
                Pioneer status incentive when certain requirements are met.
              </p>
              <p class="w-100">
                Capital gains from property disposed within 3-5 years is not subject to tax
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CGT-10% WHT-10%
              Stamp duties - 2%
              Property levy
              - Residential - 0.5%     - Malls-1.25%
              - lndustrial-0.5%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Federal Ministry of Lands, Housing and Urban Development
              </p>
              <p class="w-100">
                Federal Housing Authority
              </p>
              <p class="w-100">
                Lagos State Real Estate Transaction Department
              </p>
              <p class="w-100">
                Real estate Developers Association of Nigeria
              </p>
              <p class="w-100">
                Nigerian Institute of Estate Surveyors and Valuers
              </p>
            </div>
          </div>
          <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Retail
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <div class="font-weight-bold w-100 mb-2">
                Tax related incentives also include:
              </div>
              <p class="w-100">
                Exemption from capital gains tax on disposal of assets
                Zero VAT on basic food items
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT- 30%
              ET-2%
              WHT-10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Standard Organisation of Nigeria
              </p>
              <p class="w-100">
                National Agency for Food and Drug Administration and Control
              </p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              ICT
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <div class="font-weight-bold w-100 mb-2">
                Tax related incentives also include:
              </div>
              <p class="w-100">
                50% reduction in WHT on dividends payable to an investor in Venture project company
              </p>
              <p class="w-100">
                Capital allowance of 100% spread over 5 years
              </p>
              <p class="w-100">
                Zero capital gains tax on capital disposal within 5 years
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT- 30%
              ET-2%
              Custom duties -
              5%-75%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                National Information Technology Development
                Agency
              </p>
              <p class="w-100">
                National Electronic Commerce Council
              </p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Power
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                There is up - front funding in form of capital subsidies to cover part of the initial capital cost by the Nigeria Gap Fund for PPP
              </p>
              <div class="w-100 font-weight-bold">
                Tax incentives also include:
              </div>
              <p class="w-100">
                Zero duty on purchase of power generation equipment
              </p>
              <p class="w-100">
                20% capital allowance for 5 years
              </p>
              <p class="w-100">
                Tax holiday of 5-7 years granted to companies that manufacture transformers, meters, control panels, switch gears, cable and other electrical related equipment.
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT - 30% ET-2%
              WHT-10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Nigerian Electricity
                Regulatory Commission
              </p>
              <p class="w-100">
                Federal Ministry of Power
              </p>
              <p class="w-100 mb-2">
                Lagos State Electricity Board
              </p>
            </div>
          </div>
          <div data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Transportation
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p>
                Lagos State government is willing to enter into a PPP arrangement in the operation of water transportation
              </p>
              <div class="w-100 font-weight-bold mb-2">
                Tax related incentives also includes:
              </div>
              <p class="w-100">
                Initial capital allowance of 30% on purchase of vehicles
              </p>
              <p class="w-100">
                Restriction of tax charged for shipping and airline companies to activities carried out in Nigeria
              </p>
              <p class="w-100">
                Tax holiday of 5- 7 years for ship building, maintenance of vessels, manufacturing and maintenance of aircraft
              </p>
              <p class="w-100">
                Exemption from VAT for commercial vehicles and spare parts purchased
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT- 30%
              ET- 2% WHT-10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Lagos Metropolitan Transportation Authority
              </p>
              <p class="w-100">
                National Union of Road Transport Workers
              </p>
            </div>
          </div>
          <div data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Health
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p>
                Companies involved in the formulation and manufacture of pharmaceuticals qualifies for pioneer status incentive.
              </p>
              <div class="font-weight-bold w-100 mb-2">
                Tax related incentive includes:
              </div>
              <p class="w-100">
                Tax holiday of 3-5 years
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT- 30%
              ET- 2% WHT-10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                National Agency for Food and Drug Administration and Control
              </p>
              <p class="w-100">
                National Health insurance Scheme
              </p>
              <p class="w-100">
                Nigerian Medical Association
              </p>
              <p class="w-100">
                Lagos State Ministry of Health
              </p>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Tourism
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <div class="w-100 font-weight-bold mb-2">
                Tax related incentive includes:
              </div>
              <p class="w-100">
                25% of income derived from tourism by hotels in convertible currencies will be exempted from tax
              </p>
              <p class="w-100">
                Tax holiday of 3 -5 years
              </p>
              <p class="w-100">
                Import duty exemption on tourism related equipment
              </p>
              <p class="w`">
                Provision of land for tourism development at concessional rates
              </p>
              <p class="w-`">
                Availability of soft loans with long period of moratorium
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT - 30%
              ET - 2%
              WHT - 10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                National Film& Video Censors Board
              </p>
              <p class="w-100">
                Nigerian Copyright Commission
              </p>
              <p class="w-100">
                Nigerian Broadcasting Corporation
              </p>
              <p class="w-100">
                Lagos State Ministry of Tourism and Inter- Governmental Relations
              </p>
            </div>
          </div>
          <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="row incentive-table-card mt-5 p-5 table-width">
            <div class="col-2 d-flex align-items-center justify-content-center text-success">
              Environment
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <div class="w-100 font-weight-bold mb-2">
                Tax related incentive includes:
              </div>
              <p class="w-100">
                Rent free land at construction stage in free zone areas
              </p>
              <p class="w-100">
                Repatriation of foreign capital investment with capital appreciation on investment <br>
              </p>
              <p class="w-100">
                Import duty-free raw materials input
              </p>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              CIT- 30%
              ET- 2% WHT-10%
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center flex-column">
              <p class="w-100">
                Lagos State Waste <br> Management Authority
              </p>
              <p class="w-100">
                Lagos State Environmental <br> Protection Agency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background-color:  #E5E5E5;; padding: 110px 0px 70px;">
      <div class="auto-container">
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="other-gen-header">
          OTHER GENERAL INCENTIVES
        </div>
        <div data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="other-gen-body mt-3">
          As part of the efforts to provide an enabling environment <br> the government has passed aggressive incentives for investors to benefit
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <div class="d-flex flex-column">
              <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="bg-white">
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <img src="~/assets/images/incentive1.png" width="100%">
                </div>
                <div class="p-5">
                  <div class="incentive-heading2 w-100 text-center mb-3">
                    Lekki Free Trade Zone (LFTZ)
                  </div>
                  <div class="incentive-body2">
                    <p class="w-100">
                      The State Government has obtained approval frorn NEPZA for the development of the free trade zone. A minimum investment of $500,000 is required by approved enterprises to operate in the free trade zone .
                    </p>
                    <p class="w-100">
                      The incentives for LFTZ include:
                    </p>
                    <p class="w-100">
                      Exemption from all forms of federal. state and local government taxes. levies and rates.
                    </p>
                    <p class="w-100">
                      Duty free import of capital equipment. machinery. raw materials components and spare parts
                    </p>
                    <p class="w-100">
                      Freedom from legislative provisions perta ining to taxes. levies. duties and foreign exchange regulations
                      Up to 100% foreign ownership of businesses
                    </p>
                    <p class="w-100">
                      Repatriation of foreign capital investment at any time with capital appreciation of the investment
                    </p>
                    <p class="w-100">
                      Unrestricted remittance of profits and dividends earned by foreign investors No import or export licences required in the zone.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="bg-white mt-5">
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <img src="~/assets/images/invest32.png" width="100%">
                </div>
                <div class="p-5">
                  <div class="incentive-heading2 w-100 text-center mb-3">
                    Pioneer Status
                  </div>
                  <div class="incentive-body2">
                    <p class="w-100">
                      Five-year tax holiday in respect of industries located in economically disadvantaged local government area of the Federation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="d-flex flex-column">
              <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="bg-white">
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <img src="~/assets/images/invest30.png" width="100%">
                </div>
                <div class="p-5">
                  <div class="incentive-heading2 w-100 text-center mb-3">
                    Labour Intensive Mode of Production
                  </div>
                  <div class="incentive-body2">
                    <p class="w-100">
                      Industries with high labour/capital ratio are entitled to tax concessions.
                    </p>
                    <p class="w-100">
                      100 persons-6% tax concession
                    </p>
                    <p class="w-100">
                      200 persons - 7 % tax
                    </p>
                    <p class="w-100">
                      concession 1,000 persons or more - 15% tax concession
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="bg-white mt-5">
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <img src="~/assets/images/invest31.png" width="100%">
                </div>
                <div class="p-5">
                  <div class="incentive-heading2 w-100 text-center mb-3">
                    SME Incentives
                  </div>
                  <div class="incentive-body2">
                    <p class="w-100">
                      SMEs have a 10% reduction in tax rate to be paid in the first 5 years of commencing business
                    </p>
                    <p class="w-100">
                      Dividends from small manufacturing companies are exempted from tax for the first 5 years of business operations .
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="bg-white mt-5">
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <img src="~/assets/images/invest33.png" width="100%">
                </div>
                <div class="p-5">
                  <div class="incentive-heading2 w-100 text-center mb-3">
                    Research & Development Incentive
                  </div>
                  <div class="incentive-body2">
                    <p class="w-100">
                      Up to 10% of profits set aside as reserve for Research and Development qualify as allowable expenses
                    </p>
                    <p class="w-100">
                      Up to 120% of expenses on Research and Development are tax deductible provided that such research and development activities are carried out in Nigeria and are connected to the business from which income or profit is derived
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import backgroundUrl from '~/assets/images/background/incentive30.png'
import backgroundUrl2 from '~/assets/images/background/incentive31.png'

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
