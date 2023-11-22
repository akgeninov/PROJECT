/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        whiteSmoke500: "#F4F4F4",
        whiteSmoke600: "#DEDEDE",
        black50: "#E7E7E7",
        black400: "#3F4041",
        black500: "#0F1011",
        indigoDye500: "#12517C",
      },
      fontFamily: {
        heebo: "Heebo",
      },
      dropShadow: {
        customSm: "2px 2px 12px 0px rgba(1, 1, 1, 0.10)",
      },
      boxShadow: {
        customSm: "2px 2px 12px 0px rgba(1, 1, 1, 0.10)",
      },
      backgroundImage: {
        aboutSection: "url('./assets/images/Rectangle_104.png')",
        "service-section":
          "url('./assets/images/wave_accent_atas.png'), url('./assets/images/wave_accent_bawah.png')",
      },
    },
  },
  plugins: [],
};
