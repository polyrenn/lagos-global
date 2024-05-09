export default {
  ssr: true,
  head: {
    title: 'Invest In Lagos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js' },
      { src: 'js/jquery.js', body: true },
      { src: 'js/popper.min.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/jquery-ui.js', body: true },
      { src: 'js/jquery.fancybox.js', body: true },
      { src: 'js/owl.js', body: true },
      { src: 'js/scrollbar.js', body: true },
      { src: 'js/appear.js', body: true },
      { src: 'js/wow.js', body: true },
      { src: 'js/wow.js', body: true },
      { src: 'js/custom-script.js', body: true }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/map', mode: 'client' },
    { src: '@/plugins/dateConverter', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.lagossdgandinvestment.com/api/v1',
      proxyHeaders: false,
      credentials: false
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-N725KXG'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
