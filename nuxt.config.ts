// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        shim: false
      },
    build: {
      //   extractCSS: false,
        transpile: ["vuetify"],
      },
    modules: [
      '@pinia/nuxt',
    ],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
    nitro: {
      serveStatic: true,
    },
    devServerHandlers: [],
    hooks: {
    },
    target: 'static',
    router: {
      base: '/nuxtjs-uikit/'
    },
  
  })


  