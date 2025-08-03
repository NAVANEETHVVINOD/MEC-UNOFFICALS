// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      Anton: [400],             // For the 3D hero text
      Inter: [400, 500, 700],   // For clean body text
      'Patrick Hand': [400],    // For handwritten/doodle headers
    },
    display: 'swap',
  },
  css: ['~/assets/css/main.css'],
})