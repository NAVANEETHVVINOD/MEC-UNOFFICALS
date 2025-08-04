// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-title': '#a855f7',
        'brand-grey-sub': '#6b7280',
        'purple-accent': '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        stencil: ['JetBrains Mono', 'monospace'],
        handdrawn: ['Patrick Hand', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}