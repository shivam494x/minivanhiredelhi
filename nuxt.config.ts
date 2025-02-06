// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // pages: false,
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  ui: {
    global: true,
  },
  app: {
    head: {
      title: "Mini Van Hire Delhi",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Affordable and reliable mini van hire services in Delhi for all your travel needs.' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },
  plugins: ["~/plugins/gsap.js"],
  css: ["~/assets/css/global.css"],
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  serverDir: "./server"
});
