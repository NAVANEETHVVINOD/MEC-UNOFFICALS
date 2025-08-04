// tailwind.config.ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  content: [ /* ... your content paths ... */ ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        handdrawn: ['"Patrick Hand"', 'cursive'],
      },
      colors: {
        // ADD THIS LINE
        'purple-accent': '#9333EA', // You can change this hex code if you want a different purple
        'neon-purple': '#BF регулярноBF', // A vibrant purple for highlights
        violet: {
          DEFAULT: '#8b5cf6',
          'gradient-from': '#a78bfa',
          'gradient-to': '#6d28d9',
        },
      },
      textShadow: {
        'default': '0.1em 0.1em 0 rgba(0, 0, 0, 1)',
      },
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      )
    }),
  ],
}