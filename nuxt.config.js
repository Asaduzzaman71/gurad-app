export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    bodyAttrs: {
      'class':"loading",
      'data-layout-color':"light",
      'data-leftbar-theme':"default" ,
      'data-rightbar-onstart':"true"
    },
    title: 'guard-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      // { type: 'stylesheet', href: 'css/app.css' },
      // { type: 'stylesheet', href: 'css/app-modern.css' }
      // { type: 'stylesheet', href: 'css/vendor/jquery-jvectormap-1.2.2.css' },
      // { type: 'stylesheet', href: 'css/icons.min.css' }
      
      
    ],
    script:[
      // { type: 'text/javascript', src: 'js/app.js' },
      // { type: 'text/javascript', src: 'js/app.min.js' },
      // { type: 'text/javascript', src: 'js/vendor.js' },
      // { type: 'text/javascript', src: 'js/vendor.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
