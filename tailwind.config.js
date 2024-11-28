/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-bg": "url('./src/assets/images/more/15.jpg')",
      },
      fontFamily: {
        rancho: "Rancho",
        raleway: "Raleway",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
