// nuxt.config.ts

export default defineNuxtConfig({
  experimental: {
    watcher: 'chokidar',
  },

  nitro: {
    compatibilityDate: '2024-04-03',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      'Black Ops One': [400], // The correct stencil font
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],
})