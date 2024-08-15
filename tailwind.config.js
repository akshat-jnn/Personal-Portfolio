/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      screens: {
        tablet: "900px",
        mobile: "460px",
        md: "800px",
      },
    },
  },
  plugins: [],
};
