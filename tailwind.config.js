/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bannerBtn: "#E3B577",
        aboutBg: "rgb(236, 234, 227)",
      },
      backgroundImage: {
        "navbar-bg": "url('./src/assets/images/more/15.jpg')",
        bannerBg: "url('./src/assets/images/more/3.png')",
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
