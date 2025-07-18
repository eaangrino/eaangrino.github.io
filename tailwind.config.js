/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 8s linear infinite',
      },
    },
  },
  plugins: [ require("daisyui") ],
  daisyui: {
    themes: [ "light", "dark" ],
  },
} 