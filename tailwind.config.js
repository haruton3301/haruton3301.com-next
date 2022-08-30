module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1f2937',
          secondary: '#374151',
          accent: '#1FB2A6',
          neutral: '#191D24',
          'base-100': '#fff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
