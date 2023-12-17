'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_kategori", [
      {
        nama: "Enterpreneur"
      },
      {
        nama: "Sales & Marketing"
      },
      {
        nama: "Office Productivity"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_kategori", null, {});
  }
};
