'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_diskon", [
      {
        nama: "Diskon Akhir Tahun",
        jumlah_persen: 7,
        tgl_mulai: new Date('2023-12-15'),
        tgl_selesai: new Date('2023-12-31'),
      },
      {
        nama: "Diskon Natal",
        jumlah_persen: 5,
        tgl_mulai: new Date('2023-05-01'),
        tgl_selesai: new Date('2023-12-15'),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_diskon", null, {});
  }
};
