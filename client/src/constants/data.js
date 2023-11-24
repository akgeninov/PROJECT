const { default: images } = require("./images");
const { default: komunitasPic } = require("./komunitasPic");

const dataLayanan = [
  {
    title: "Kelas bisnis",
  },
  {
    title: "Konsultasi Bisnis",
  },
  {
    title: "Buat Website & Aplikasi",
  },
  {
    title: "Social Media Management",
  },
  {
    title: "Desain Logo",
  },
  {
    title: "Live Streaming & Content",
  },
];

const dataKomunitas = [
  {
    title: "Komunitas Bisnis",
    pic: komunitasPic.rectangle74,
  },
  {
    title: "Komunitas Content Creator",
    pic: komunitasPic.rectangle74,
  },
];

const dataService = [
  {
    title: "Kelas Bisnis",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.kelasBisnis,
  },
  {
    title: "Konsultasi Bisnis",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.konsultasiBisnis,
  },
  {
    title: "Buat Website & Aplikasi",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.buatWebsiteDanAplikasi,
  },
  {
    title: "Social Media Management",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.socialMediaManagement,
  },
  {
    title: "Desain Logo",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.desainLogo,
  },
  {
    title: "Live Streaming & Content",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.liveStreamingDanContent,
  },
];

module.exports = { dataLayanan, dataService, dataKomunitas };
