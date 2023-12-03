/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        whiteSmoke500: "#F4F4F4",
        whiteSmoke600: "#DEDEDE",
        whiteSmoke700: "#ADADAD",
        whiteSmoke800: "#868686",
        black50: "#E7E7E7",
        black100: "#B5B5B5",
        black400: "#3F4041",
        black500: "#0F1011",
        indigoDye500: "#12517C",
        greenWhatsapp: "#32D951",
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
        serviceSection: "url('./assets/images/wave_accent.png')",
        komunitySection: "url('./assets/images/wave_accent_bawah.png')",
        komunitasKontenCreatorPic:"url('./assets/komunitas-pic/komunitas_konten_creator.png')",
        komunitasBisnisPic:"url('./assets/komunitas-pic/komunitas_bisnis.png')",
      },
    },
  },
  plugins: [],
};
