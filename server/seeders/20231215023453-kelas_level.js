'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_level", [
      {
        nama: "Pemula"
      },
      {
        nama: "Menengah"
      },
      {
        nama: "Lanjutan"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_level", null, {});
  }
};
