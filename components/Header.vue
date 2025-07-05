<template>
  <div>
    <header class="main-header header-style-one">
      <!-- Header Upper -->
      <div class="header-upper">
        <div class="auto-container">
          <div class="inner-container clearfix">
            <!--Logo-->
            <div class="logo-box clearfix">
              <div class="logo">
                <NuxtLink to="/">
                  <img src="~assets/images/logo.png" alt="Lagos Global Logo" title="Lagos Global">
                </NuxtLink>
                <span style="visibility: hidden">Lagos Global</span>
              </div>

              <div class="search-btn search-btn-one" style="visibility: hidden">
                <button type="button" class="theme-btn search-toggler">
                  <span class="txt">Explore</span> <span class="icon flaticon-loupe-1" />
                </button>
              </div>
            </div>

            <!--Nav-->
            <div class="nav-outer clearfix">
              <!--Mobile Navigation Toggler for desktop (often hidden by CSS and JS used for mobile)-->
              <div class="mobile-nav-toggler">
                <span class="icon flaticon-menu-1" />
              </div>

              <!-- Main Menu -->
              <nav class="main-menu navbar-expand-md navbar-light">
                <div id="navbarSupportedContent" class="collapse navbar-collapse show clearfix">
                  <ul class="navigation clearfix">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/lagosthemes">SDGs</NuxtLink></li>
                    <li class="dropdown">
                      <NuxtLink to="#">Investment Opportunities</NuxtLink> <!-- NuxtLink can be used even if it's just for dropdown toggle styling -->
                      <ul class="dropdown-menu columns container-fluid" style="width: 600px">
                        <li><NuxtLink to="/environment">Environment</NuxtLink></li>
                        <li><NuxtLink to="/agriculture">Agriculture</NuxtLink></li>
                        <li><NuxtLink to="/health">Health</NuxtLink></li>
                        <li><NuxtLink to="/housing">Housing</NuxtLink></li>
                        <li><NuxtLink to="/transportation">Transportation</NuxtLink></li>
                        <li><NuxtLink to="/tourism">Tourism and culture</NuxtLink></li>
                        <li><NuxtLink to="/technology">ICT</NuxtLink></li>
                        <li><NuxtLink to="/power">Power and infrastructure</NuxtLink></li>
                        <li><NuxtLink to="/oilandgas">Oil and gas</NuxtLink></li>
                        <li><NuxtLink to="/education">Education</NuxtLink></li>
                      </ul>
                    </li>
                    <li>
                      <a target="_blank" href="https://ngodirectory.lagossdgandinvestment.com/">NGO Directory</a>
                    </li>
                    <li>
                      <NuxtLink to="/incentives">Investment Incentives</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/about-us">About Us</NuxtLink>
                    </li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul>
                </div>
              </nav>
            </div>
            <!--Other Links-->
            <div class="other-links clearfix" />
          </div>
        </div>
      </div>
      <!--End Header Upper-->

      <!-- Sticky Header  -->
      <!-- Functionality for sticky header needs to be re-implemented in Vue if it was JS-driven -->
      <div class="sticky-header">
        <div class="auto-container clearfix">
          <div class="logo pull-left">
            <NuxtLink to="/" title="Lagos Global"><img src="~/assets/images/sticky-logo.png" alt="Lagos Global Sticky Logo" title="Lagos Global"></NuxtLink>
          </div>
          <div class="pull-right">
            <nav class="main-menu clearfix">
              <!-- Menu content for sticky header would typically be cloned here by JS, or rebuilt in Vue -->
            </nav>
          </div>
        </div>
      </div>
      <!-- End Sticky Menu -->

      <!-- Mobile Menu JS driven part is removed/commented as it's likely jQuery based -->
      <!-- <div class="mobile-menu"> ... </div> -->
    </header>

    <!-- Mobile Navigation (Bootstrap based) -->
    <nav class="navbar my-mobile navbar-expand-lg navbar-dark fixed-top" style="background-color:  #062135;color: white">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~assets/images/logo.png" style="height: 50px;width: 50px" alt="Lagos Global Mobile Logo" title="Lagos Global">
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMobileMenu"
        aria-controls="navbarSupportedContent2"
        :aria-expanded="isMobileMenuOpen.toString()"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarSupportedContent2" class="collapse navbar-collapse" :class="{ 'show': isMobileMenuOpen }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NuxtLink>
          </li>
          <li class="nav-item mt-2">
            <NuxtLink style="color: white" to="/lagosthemes">SDGs</NuxtLink>
          </li>
          <li class="nav-item dropdown mt-2" :class="{ show: isInvestmentDropdownOpen }" @mouseenter="isInvestmentDropdownOpen = true" @mouseleave="isInvestmentDropdownOpen = false">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              @click.prevent="toggleInvestmentDropdown"
              aria-haspopup="true"
              :aria-expanded="isInvestmentDropdownOpen.toString()"
              style="color: white"
            >
              Investment Opportunities
            </a>
            <div class="dropdown-menu" :class="{ show: isInvestmentDropdownOpen }" aria-labelledby="navbarDropdown">
              <NuxtLink class="dropdown-item" to="/environment">Environment</NuxtLink>
              <NuxtLink class="dropdown-item" to="/agriculture">Agriculture</NuxtLink>
              <NuxtLink class="dropdown-item" to="/health">Health</NuxtLink>
              <NuxtLink class="dropdown-item" to="/housing">Housing</NuxtLink>
              <NuxtLink class="dropdown-item" to="/transportation">Transportation</NuxtLink>
              <NuxtLink class="dropdown-item" to="/tourism">Tourism and culture</NuxtLink>
              <NuxtLink class="dropdown-item" to="/technology">ICT</NuxtLink>
              <NuxtLink class="dropdown-item" to="/power">Power and infrastructure</NuxtLink>
              <NuxtLink class="dropdown-item" to="/oilandgas">Oil and gas</NuxtLink>
              <NuxtLink class="dropdown-item" to="/education">Education</NuxtLink>
            </div>
          </li>
          <li class="nav-item mt-2">
            <a style="color: white" target="_blank" href="https://ngodirectory.lagossdgandinvestment.com/">NGO Directory</a>
          </li>
          <li class="nav-item mt-2">
            <NuxtLink style="color: white" to="/incentives">Investment Incentives</NuxtLink>
          </li>
          <li class="nav-item mt-2">
            <NuxtLink style="color: white" to="/about-us">About Us</NuxtLink>
          </li>
          <li class="nav-item mt-2 mb-3">
            <NuxtLink style="color: white" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const isInvestmentDropdownOpen = ref(false);
const toggleInvestmentDropdown = () => {
  isInvestmentDropdownOpen.value = !isInvestmentDropdownOpen.value;
};

// Close dropdown if mobile menu is closed
watch(isMobileMenuOpen, (newValue) => {
  if (!newValue) {
    isInvestmentDropdownOpen.value = false;
  }
});
</script>

<style scoped>
/* Styles remain the same. Ensure Bootstrap CSS is loaded for navbar collapse to work visually. */
/* You might need to add styles for .show on .dropdown-menu if not using Bootstrap JS */
.dropdown-menu.show {
  display: block;
}
</style>
