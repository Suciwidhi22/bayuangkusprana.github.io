/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode : "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button : "#8586E8",
        bayu : "#5A5CC3",
        bayudark : "#21243E",
        fontdark : "#FFFFFF"
      },
      fontFamily: {
        burtons: 'burtons',
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
