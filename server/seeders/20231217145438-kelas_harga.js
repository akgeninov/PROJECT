'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_harga", [
      {
        harga_max: 0,
        harga_min: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 50000,
        harga_min: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 100000,
        harga_min: 250000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 251000,
        harga_min: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        harga_max: 501000,
        harga_min: 1000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_harga", null, {});
  }
};
