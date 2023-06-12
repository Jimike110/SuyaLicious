/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'brand-wine': '#5B0017',
        'brand-yellow': '#CC9D2F',
      }
    },
    fontFamily: {
      'cotoris': ['CotorisBold', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    
    backgroundImage: {
      'hero-bg': "url('assets/images/hero-bg.png')",
      'about-1': "url('/assets/images/about-1.png')",
      'about-2': "url('assets/images/about-2.png')",
      'about-3': "url('assets/images/about-3.png')",
    }
  },
  plugins: [],
}

