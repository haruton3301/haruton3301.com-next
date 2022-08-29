/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['cmyk']
  },
  plugins: [require('daisyui')]
}
