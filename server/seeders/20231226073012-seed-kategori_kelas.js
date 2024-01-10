'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategori_kelas", [
      {
        kategori: "Entrepreneur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori: "Sales & Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kategori: "Office Productivity",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategori_kelas", null, {});

  }
};
