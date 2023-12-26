'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("akses_kelas", [
      {
        akses: "Materi Eksklusif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        akses: "Materi Umum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("akses_kelas", null, {});

  }
};
