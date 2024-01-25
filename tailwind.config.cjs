/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/Logs.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 2s linear infinite'
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
