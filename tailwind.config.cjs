/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
};
