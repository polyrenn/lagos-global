// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // SSR is enabled by default in Nuxt 3

  app: {
    head: {
      title: 'Lagos Global',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        // Note: jQuery and other non-Vue libraries might cause issues in Nuxt 3.
        // Consider replacing with Vue 3 compatible alternatives or removing if not essential.
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js' }, // Chart.js v2, consider updating or using a Vue wrapper
        // { src: '/js/jquery.js', body: true },
        // { src: '/js/popper.min.js', body: true }, // Popper.js is often a dependency of Bootstrap
        // { src: '/js/bootstrap.min.js', body: true }, // Bootstrap JS, ensure it doesn't conflict with Vue 3
        // { src: '/js/jquery-ui.js', body: true },
        // { src: '/js/jquery.fancybox.js', body: true },
        // { src: '/js/owl.js', body: true }, // Owl Carousel, consider Vue 3 alternatives
        // { src: '/js/scrollbar.js', body: true },
        // { src: '/js/appear.js', body: true },
        // { src: '/js/wow.js', body: true }, // WOW.js for animations
        // { src: '/js/custom-script.js', body: true } // Custom jQuery scripts will likely need refactoring
      ]
    }
  },

  css: [
    '~/assets/css/bootstrap.css', // Assuming you want to keep bootstrap styles
    '~/assets/css/style.css', // Main stylesheet
    '~/assets/css/responsive.css',
    'aos/dist/aos.css', // AOS library
    'vue3-carousel/dist/carousel.css'
    // Add other global CSS files here
  ],

  plugins: [
    // Plugins are auto-registered from the 'plugins' directory.
    // { src: '~/plugins/aos.client.ts' }, // Example: if specific ordering or options were needed.
    // Map plugin removed, dateConverter moved to utils.
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue3-carousel-nuxt'
    // '@nuxt/content', // Example: If you plan to use Nuxt Content
  ],

  // Axios module configuration
  // For Nuxt 3, runtimeConfig is the preferred way for environment variables
  // axios: { // This top-level axios key might be deprecated or handled differently
  //   baseURL: 'https://api.lagossdgandinvestment.com/api/v1', // Moved to runtimeConfig
  // },

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      axios: {
        baseURL: 'https://api.lagossdgandinvestment.com/api/v1'
        // proxyHeaders and credentials might not be directly configurable here.
        // Nuxt 3's $fetch handles cookies/credentials by default in many cases.
        // If proxying is needed, it's often handled at the server/Nitro level.
      },
      gtm: {
        id: 'GTM-N725KXG',
        // Add other GTM options if needed
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Nuxt 3 uses Vite by default, which has its own build optimizations.
    // Webpack specific build configs from Nuxt 2 (like transpile) might need adjustment
    // if you switch to Vite or update webpack config.
  },

  // Nuxt 3 specific configurations
  devtools: { enabled: true }, // Enables Nuxt Devtools

  compatibilityDate: '2024-07-03', // Helps with smoother upgrades

  // If you were using components: true, it's the default in Nuxt 3.
  // Explicitly:
  // components: {
  //   dirs: [
  //     '~/components'
  //   ]
  // },

  // For ESLint, if you added @nuxt/eslint-config
  // typescript: {
  //   shim: false // Recommended for Nuxt 3 to avoid conflicts
  // },
  // eslint: {
  //   config: {
  //     stylistic: true // Enables stylistic rules
  //   }
  // }
})
