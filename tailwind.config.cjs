/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: ["./index.html", "./public/**/*.{html}", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
<<<<<<< HEAD
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 2s linear infinite",
=======
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 2s linear infinite'
>>>>>>> aac383e11185f557d358411f2498a40afe63668d
      },
      fontFamily: {
        inter: ["inter", "serif"],
        tahoma: ["tahoma"],
        vazir: ["vazir"],
      },
      height: {
        screen2: ["225vh"],
      },
      width: {
        100: ["600px"],
        200: ["800px"],
      },
      backgroundColor: {
        custom: {
          100: ["#0e0e0e"],
          200: ["#282828"],
        },
      },
      fontSize: {
        xxs: ["0.6rem"],
      },
    },
  },
  plugins: [],
};
