/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: ["./index.html", "./public/**/*.{html}", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "pulse-slow": "pulse 2s linear infinite",
      },
      fontFamily: {
        inter: ["inter", "serif"],
        tahoma: ["tahoma"],
        vazir: ["vazir"],
      },
      height: {
        screen2: ["225vh"],
        70: ["16.5rem"],
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
