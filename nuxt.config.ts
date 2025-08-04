// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    watcher: 'chokidar', 
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      Anton: [400],
      Inter: [400, 500, 700],
      'Patrick Hand': [400],
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
})