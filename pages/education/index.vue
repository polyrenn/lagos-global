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
                Education
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
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="edu-header1 text-center">
              Lagos state investment <br> opportunities in education
            </div>
            <div class="p-5 edu-body1">
              Lagos State Government has liberalized education. As at August. 2020 over 18,000 private Schools had registered with Lagos State Government. This is achieved under improved Service Delivery in Private School Registration and Approval process with efficient Private School Assessment. Monitoring and Evaluation system. The State is on the edge to license more private Schools and Vocationa l Centers
              This opportunity has created an enabling investment-ready environment for new investors to come and invest inthe education sector.
            </div>
            <div class="row">
              <div class="col-sm-6 p-sm-5">
                <div class="p-5" style="background-size: 100% 100%" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
                  <div class="edu-header2 py-2" style="border-bottom: 1px solid #FFFFFF;">
                    Broad Sectoral <br> Areas
                  </div>
                  <div class="edu-body2 py-3">
                    <p class="edu-body2">
                      Introduction of STEAM methodology into the Lagos State Curriculum
                    </p>
                    <p class="edu-body2">
                      Establishment of Computer Based Test (CBT) Centres in all the Six Education Districts which will also serve as ICT Training Centres for all Schools in the Districts
                    </p>
                    <p class="edu-body2">
                      Computerization of Approval Process of Private Schools in the State
                    </p>
                    <p class="edu-body2">
                      Provision of Learning Teaching Materials' Management Information Systems
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 p-sm-5 startup-margin">
                <div class="p-5 h-100" style="background-size: 100% 100%" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
                  <div class="edu-header2 py-2" style="border-bottom: 1px solid #FFFFFF;">
                    Capacity And Welfare of <br> School Personnel
                  </div>
                  <div class="edu-body2 py-3">
                    <p class="edu-body2">
                      Upgrade of Teacher Training Centre, Owutu
                    </p>
                    <p class="edu-body2">
                      Provision of City Accommodation - Hostel Centres for Public School Teachers
                    </p>
                    <p class="edu-body2">
                      Introduction of a Lagos State Teacher welfare fund (under a Special Card and Merchant Scheme)
                    </p>
                    <p class="edu-body2">
                      Provision of Teaching Aids such as Tablets to improve the delivery of quality education
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 p-sm-5 startup-margin">
                <div class="p-5 h-100" style="background-size: 100% 100%" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
                  <div class="edu-header2 py-2" style="border-bottom: 1px solid #FFFFFF;">
                    Education Resources <br> Centres
                  </div>
                  <div class="edu-body2 py-3">
                    <p class="edu-body2">
                      These Centres serve as repository for Educational Antiques, Multipurpose Teaching Aids and Teacher Training Centres
                    </p>
                    <p class="edu-body2">
                      Increasing number of Resource Centres across the Education Districts in the State
                    </p>
                    <p class="edu-body2">
                      Equipping Centres with Interactive Boards, Textbook Printing Press, Multimedia Studio
                    </p>
                    <p class="edu-body2">
                      Upgrading of infrastructure and Equipment of the current Centre and acquirenew Equipment
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 p-sm-5 startup-margin">
                <div class="p-5 h-100" style="background-size: 100% 100%" :style="{ backgroundImage: `url(${backgroundUrl2})` }">
                  <div class="edu-header2 py-2" style="border-bottom: 1px solid #FFFFFF;">
                    Secondary School <br> Education
                  </div>
                  <div class="edu-body2 py-3">
                    <p class="edu-body2">
                      Investing in Infrastructure - Build new Schools and refurbishing existing ones to specifications
                    </p>
                    <p class="edu-body2">
                      Construction and Upgrading Special Function facilities - Intro Tech, ICT, Science Laboratory,
                    </p>
                    <p class="edu-body2">
                      Classrooms and Libraries
                    </p>
                    <p class="edu-body2">
                      Launch ing the Public Schools Adoption programme (Invite the Private and Development Sectors to adopt Public Schools
                    </p>
                    <p class="edu-body2">
                      Working with Curriculum
                    </p>
                    <p class="edu-body2">
                      Development Experts to improve the relevance of the current Academic Curriculum
                    </p>
                    <p class="edu-body2">
                      Investing in Technology for Public School Administration and agile learning management system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: #FCFCFF">
          <div class="auto-container">
            <div class="edu-header3 mb-5">
              Other Investment Opportunities
            </div>
            <div class="row">
              <div class="col-sm-4">
                <img src="~/assets/images/edu-img1.png">
              </div>
              <div class="col-sm-4 edu-body3">
                <div class="edu-header4 mb-3">
                  Smart Learning
                </div>
                <p class="edu-body3">
                  Post COVID-19 educational development plans will ensure that Lagos State goes digital from 2021 by granting equal access to virtual education for all Lagos State pupils/Student.
                </p>
                <p class="edu-body3">
                  Likewise, good teachers and effective teaching are critical in serving the needs of learners. This affirms the need for investment in digital infrastructure and digital teaching materials. Investors are welcome to make this a reality
                </p>
              </div>
              <div class="col-sm-4 edu-body3">
                <div class="edu-header4 mb-3">
                  Teachers Training Programme
                </div>
                <p class="edu-body3">
                  Recently, the Lagos State has started the training of teachers to equip them with some digital skills. Opportunities are therefore available for those that will invest in human capital development in this area.
                </p>
                <p class="edu-body3">
                  The computer-assisted learn ing and teachers training programme are a pragmatic approach to ensuring quality in education. Technical Education.
                </p>
              </div>
            </div>
            <div class="row mt-5 pt-5 flex-column-reverse flex-sm-row">
              <div class="col-sm-4 edu-body3">
                <div class="edu-header4 mb-3">
                  TVET Education (LASTVEB)
                </div>
                <p class="edu-body3">
                  Construction and Refurbishment of Classrooms and Workshops at the Lagos State Technical and Vocationa l Educat ion Board (LASTVEB)
                </p>
                <p class="edu-body3">
                  Design and Offer for concession opportunities to the Private Sector to build additional Vocational Centres and connect with Industry for employment
                </p>
                <p class="edu-body3">
                  Sponsoring Students Industrial Work Experience Schemes (SIWESS)
                </p>
                <p class="edu-body3">
                  Sponsoring Teachers Industrial Work Experience Schemes (TIWESS)
                </p>
                <p class="edu-body3">
                  Sponsoring Twining and International Exchange Programmes
                </p>
              </div>
              <div class="col-sm-4 edu-body3">
                <div class="edu-header4 mb-3">
                  Special/Inclusive Unit Education
                </div>
                <p class="edu-body3">
                  Training of Special Education Teachers for Schools with Special needs
                </p>
                <p class="edu-body3">
                  Provision of appropriate Technology and Equipments required for effective teaching
                </p>
                <p class="edu-body3">
                  Partner with International Organisation that possess the expertise for Special Needs Education
                </p>
              </div>
              <div class="col-sm-4">
                <img src="~/assets/images/edu-img2.png">
              </div>
            </div>
          </div>
        </section>
        <section class="about-section" style="background-color: white">
          <div class="auto-container">
            <div class="edu-header3 mb-5">
              Commercial opportunities
            </div>
            <div class="edu-header4 text-dark text-center">
              Linkages to commercial business that will service the education sector include
            </div>
            <div class="row mt-2">
              <div class="col-sm-3 p-3">
                <div class="text-center py-5 h-100" style="background-color: #FAFAFF">
                  <img src="~/assets/images/edu-icon1.png">
                  <div class="edu-header5 text-center py-2">
                    Production of <br> Pencil
                  </div>
                </div>
              </div>
              <div class="col-sm-3 p-3">
                <div class="text-center py-5 h-100" style="background-color: #FAFAFF">
                  <img src="~/assets/images/edu-icon2.png">
                  <div class="edu-header5 text-center py-2">
                    Production of <br> Books
                  </div>
                </div>
              </div>
              <div class="col-sm-3 p-3">
                <div class="text-center py-5 h-100" style="background-color: #FAFAFF">
                  <img src="~/assets/images/edu-icon3.png">
                  <div class="edu-header5 text-center py-2">
                    Production of <br> school sandals
                  </div>
                </div>
              </div>
              <div class="col-sm-3 p-3">
                <div class="text-center py-5 h-100" style="background-color: #FAFAFF">
                  <img src="~/assets/images/edu-icon4.png">
                  <div class="edu-header5 text-center py-2">
                    Production of <br> School bags
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
import backgroundUrl from '~/assets/images/background/edu30.png'
import backgroundUrl2 from '~/assets/images/background/edu-bi2.png'
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
