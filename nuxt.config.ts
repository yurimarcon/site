// https://nuxt.com/docs/api/configuration/nuxt-config
import { baseURL } from "./data/YuriData";


export default defineNuxtConfig({
  ssr: false,
  css: ['~/assets/main.scss'],
  typescript: {
    shim: false
  },
  // plugins: [{ src: '~/plugins/gtag.js', mode: 'client' }],
  // router: {
  //   middleware: 'analytics'
  // },
  build: {
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
    base: baseURL+'/'
  },
  app: {
    baseURL: baseURL+'/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      baseURL: baseURL+'/',
    },
  },
  baseUrl: baseURL+'/'
})