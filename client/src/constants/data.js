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
    pic: komunitasPic.komunitasBisnis,
  },
  {
    title: "Komunitas Content Creator",
    pic: komunitasPic.komunitasKontenCreator,
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

const navigationData = [
  {
    BUTTON_TEXT: "Layanan",
    data: dataLayanan,
  },
  {
    BUTTON_TEXT: "Komunitas",
    data: dataKomunitas,
  },
  {
    BUTTON_TEXT: "Artikel",
    data: null,
  },
  {
    BUTTON_TEXT: "Karir",
    data: null,
  },
  {
    BUTTON_TEXT: "Tentang Kami",
    data: null,
  },
];

const dataNews = [
  {
    judul: "3 Cara Mengembangkan Bisnis di TikTok Shop",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_1.png",
  },
  {
    judul: "12 Tren Pemasaran Paling Efektif di 2023",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_2.png",
  },
  {
    judul: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_3.png",
  },
];

module.exports = {
  dataLayanan,
  dataService,
  dataKomunitas,
  navigationData,
  dataNews,
};
