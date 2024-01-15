'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_transaksis", [
      {
        id_user: 4,
        id_kelas_bisnis: 1,
        status_transaksi: 'canceled',
        date_transaksi: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_transaksis", null, {});
  }
};
