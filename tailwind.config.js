/** @type {import('tailwindcss').Config} */
module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        navBackground: "#ffffffb3",
        dimBlack: "#000000b3",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    //'md': "767px",
    screens: {
      'sm': "640px",
      'md': "848px",
      'lg': "1024px",
      'xl': "1280px",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};