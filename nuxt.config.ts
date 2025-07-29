// https://nuxt.com/docs/api/configuration/nuxt-config



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
    base: process.env.NUXT_PUBLIC_BASE_URL ? process.env.NUXT_PUBLIC_BASE_URL + '/' : '/',
  },
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL ? process.env.NUXT_PUBLIC_BASE_URL + '/' : '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || '',
    }
  },
      htmlAttrs:{
        lang:"pt-BR",
      },
      title: 'Yuri Marcon',
      meta: [
        { hid: 'description', name: 'description', content: 'Conheça meus curos práticos e direto ao ponto.' },
        { hid: 'keywords', name: 'keywords', content: 'yuri marcon, video, aula, video-aula, curso' },
        // Meta tags para redes sociais
        { hid: 'og-title', property: 'og:title', content: 'Yuri Marcon Academy'},
        { hid: 'og-site_name', property: 'og:site_name', content: 'Yuri Marcon Academy'},
        { hid: 'og-desc', property: 'og:description', content: 'Conheça meus curos práticos e direto ao ponto.' },
        { hid: 'og-image', property: 'og:image', content: 'https://yurimarcon.github.io/site/images/courses/vue-vuetify.png' },
        { hid: 'og-image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og-url', property: 'og:url', content: 'https://yurimarcon.github.io/site' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/yurimarcon/site/refs/heads/release/public/images/rocket.avif' },
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || '',
      GTAGID: 'G-REGX3RBWCM'
    },
  },
  // baseUrl: baseURL+'/'
})