export default [
  'nuxt-i18n',
  {
    locales: [
      {
        code: 'es',
        iso: 'en-ES',
        name: 'Español',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'es',
    noPrefixDefaultLocale: true,
    seo: true,
    baseUrl: 'https://arepaipsum.com',
    vuex: {
      // Module namespace
      moduleName: 'i18n',

      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,

      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: true,

      // Mutation to commit to set route parameters translations
      syncRouteParams: true,
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('../locales/en-us.json'),

        es: require('../locales/es-es.json'),
      },
    },
  },
];
