'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("level_kelas", [
      {
        level: "Pemula",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        level: "Menengah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        level: "Lanjutan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("level_kelas", null, {});

  }
};
