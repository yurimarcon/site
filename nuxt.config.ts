// https://nuxt.com/docs/api/configuration/nuxt-config
import { baseURL } from "./data/YuriData";

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false
  },
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
  },
  runtimeConfig: {
    public: {
      baseURL: baseURL+'/',
    },
  },
  baseUrl: baseURL+'/'
})