'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_bisnis_diskon", [
      {id_kelas_bisnis: 1,id_kelas_diskon: 1},
      {id_kelas_bisnis: 2,id_kelas_diskon: 2},
      {id_kelas_bisnis: 3,id_kelas_diskon: 1},
      {id_kelas_bisnis: 3,id_kelas_diskon: 2},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_bisnis_diskon", null, {});
  }
};
