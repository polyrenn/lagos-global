<template>
  <footer class="main-footer">
    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-lg-3 col-md-6 col-sm-12 text-center px-2">
            <div class="footer-widget about-widget">
              <div class="logo">
                <NuxtLink to="/"><img width="150" height="150" src="~/assets/images/logo.png" alt="Lagos Global Logo"></NuxtLink> <br>
                <span>Lagos Global</span>
              </div>

              <div class="address">
                <h5>Sustainable Development Goals & Investment</h5>
                <div class="text">
                  3rd Floor, Admin Block,
                  Governor's Office,
                  State House,
                  Alausa - Ikeja,
                  Lagos
                </div>
              </div>

              <div class="address">
                <h5>Opening hrs</h5>
                <div class="text">
                  10am to 6pm, Sun: Closed
                </div>
              </div>
            </div>
          </div>

          <div class="column col-lg-2 col-md-6 col-sm-12 px-2">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Useful links</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li class="py-1">
                    <NuxtLink to="/glancelagos">Lagos at a glance</NuxtLink>
                  </li>
                  <li class="py-1">
                    <NuxtLink to="/#latestnews">Latest News</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column col-lg-2 col-md-6 col-sm-12 px-2">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Support</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li class="py-1">
                    <NuxtLink to="/contact">Speak to our team</NuxtLink>
                  </li>
                  <li><NuxtLink to="/#startup">Success stories</NuxtLink></li>
                  <li><NuxtLink to="/faq">Frequently asked question</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column col-lg-2 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Follow Us</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li class="d-flex py-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/Lagos-SDG-Invest-123360722387457/"><span class="fab fa-facebook-f text-white" /><span class="pl-2">Facebook</span></a>
                  </li>
                  <li class="d-flex py-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lagossdginvest"><span class="fab fa-twitter text-white" /><span class="pl-2">Twitter</span></a>
                  </li>
                  <li class="d-flex py-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lagossdg.invest/"><span class="fab fa-instagram text-white" /><span class="pl-2">Instagram</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="column col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget links-widget">
              <div class="widget-title">
                <h4>Receive Our Newsletter</h4>
              </div>
              <div class="widget-content">
                <ul class="links">
                  <li>For the latest update on Lagos Global enter your email address</li>
                </ul>
                <form @submit.prevent="submitNewsletter">
                  <div class="form-group mt-4">
                    <input
                      id="exampleInputEmail1"
                      v-model="email.value"
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    >
                    <small id="emailHelp" class="form-text text-muted pt-2">Do you consent to having this website store your information in order to process your request?</small>
                    <div class="form-check">
                      <input id="exampleCheck1" type="checkbox" class="form-check-input" v-model="consent.value" required>
                      <label class="form-check-label" for="exampleCheck1">Yes</label>
                    </div>
                  </div>
                  <button :disabled="loading.value" v-if="!loading.value" type="submit" class="btn btn-primary w-100 mt-4">
                    Submit
                  </button>
                  <button :disabled="loading.value" v-if="loading.value" type="submit" class="btn btn-primary w-100 mt-4 d-flex align-items-center justify-content-center">
                    <div class="loaderButton" /> <!-- Assuming loaderButton is a styled div for loading spinner -->
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="inner">
        <div class="copyright">
          Copyrights <a href="#" class="text-white">&copy; 2020 Lagos Global.</a> All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const consent = ref(false);
const loading = ref(false);

// Potentially get API URL from runtime config if it's not always the same
// const config = useRuntimeConfig();
// const newsletterApiUrl = config.public.newsletterApiUrl || 'https://api.lagosglobal.org/api/v1/subscribe';
const newsletterApiUrl = 'https://api.lagosglobal.org/api/v1/subscribe';


const submitNewsletter = async () => {
  if (!consent.value) {
    alert('Please consent to storing your information.');
    return;
  }
  loading.value = true;
  try {
    const response = await fetch(newsletterApiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value })
    });

    if (response.ok) {
      // const responseData = await response.json(); // If API returns JSON
      alert('Success! Thank you for subscribing.');
      email.value = '';
      consent.value = false;
    } else {
      // Handle error response from API
      // const errorData = await response.json();
      // alert(`Subscription failed: ${errorData.message || response.statusText}`);
      alert(`Subscription failed. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    alert('An error occurred during subscription. Please try again.');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Styles remain the same */
.loaderButton {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
