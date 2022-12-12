/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'max-mobile': {'max': '560px'},
        'min-mobile': {'min': '560px'},
        'ipad': {'max': '840px'},
        'lg': {'max': '1080px'},
      },
      fontFamily: {
        "inter": "'Inter', sans-serif",
        "oregano": "'Oregano', cursive"
      },
      boxShadow: {
        "form": "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        "nav": "rgba(27,31,35,0.15) 0px 0px 0px 1px"
      }
    },
  },
  plugins: [],
}
