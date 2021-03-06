import NuxtI18N from './config/i18n.js';
import head from './config/meta.js';

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head,
  /*
   ** Global CSS
   */
  css: [],
  server: {
    host: '0.0.0.0',
    port: 1811, // default: 3000
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vue-clipboard.js', '@/plugins/vue-toasted.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-26356857-7',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
    ['nuxt-svgicon', { tagName: 'arepa-icon', classPrefix: 'arepa-svg' }],
    NuxtI18N,
    '@asigloo/vue-dynamic-forms/nuxt',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-3745332358984365',
      },
    ],
  ],
  webfontloader: {
    custom: {
      families: ['Montserrat:n7', 'Hind:n3,n4,n6'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css?family=Montserrat:700&display=swap',
        'https://fonts.googleapis.com/css?family=Hind:300,400,600&display=swap',
      ],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
};
