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
      'Black Ops One': [400], // For the main stencil heading
      'Roboto Slab': [700],    // NEW: For the secondary headings like "Event Highlights"
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],
})