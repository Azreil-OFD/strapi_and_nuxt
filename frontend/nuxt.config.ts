import Nora from '@primevue/themes/nora';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
],
  routeRules: {
    '/api/**': {
      proxy: "http://127.0.0.1:1337/api/**",
    },
    '/admin/**': {
      proxy: "http://127.0.0.1:1337/admin/**",
    },
    '/docs': {
      proxy: "http://127.0.0.1:1337/documentation/v1.0.0#/",
    },
  },
  primevue: {
    options: {
        theme: {
            preset: Nora
        }
    }
}

})
