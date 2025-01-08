/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#03193A",
        'blue-light': "#03193A",
        green: "#01AF70",
      },
      maxWidth: {
        screen: '1920px',
      },
      boxShadow: {
        custom: '0px 9px 35px 0px #03193A66',
      },
    },
  },
  plugins: [],
}