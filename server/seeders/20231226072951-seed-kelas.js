'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas", [
      {
        nama_kelas: "Langkah Sukses Jadi Youngtrepreneur",
        total_pendaftar: 2124,
        harga_kelas: 500000,
        diskon: 7,
        rating: 5.0,
        gambar: 1, //input gambar belum kelar
        id_kategori_kelas:  1,
        id_level_kelas: 1,
        id_akses_kelas: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas", null, {});

  }
};
