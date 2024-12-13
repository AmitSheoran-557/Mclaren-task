/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/image/png/hero-bg-img.png')",
        "nav-img": "url('../public/assets/image/png/navbar-logo-img.png ')"
      },
      colors: {
        "blue": "#0046AD",
        "lightBrown": "#525252",
      },
      boxShadow: {
        'customOne': '0px 0px 13.9px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily:{
        "nato": ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
