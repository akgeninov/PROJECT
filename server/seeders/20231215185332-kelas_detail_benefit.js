'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_detail_benefit", [
      {id_kelas_detail: 1,id_kelas_benefit: 1},{id_kelas_detail: 1,id_kelas_benefit: 2},{id_kelas_detail: 1,id_kelas_benefit: 3},{id_kelas_detail: 1,id_kelas_benefit: 4},

      {id_kelas_detail: 2,id_kelas_benefit: 1},{id_kelas_detail: 2,id_kelas_benefit: 2},{id_kelas_detail: 2,id_kelas_benefit: 3},{id_kelas_detail: 2,id_kelas_benefit: 4},

      {id_kelas_detail: 3,id_kelas_benefit: 1},{id_kelas_detail: 3,id_kelas_benefit: 2},{id_kelas_detail: 3,id_kelas_benefit: 3},{id_kelas_detail: 3,id_kelas_benefit: 4},

      {id_kelas_detail: 4,id_kelas_benefit: 1},{id_kelas_detail: 4,id_kelas_benefit: 2},{id_kelas_detail: 4,id_kelas_benefit: 3},{id_kelas_detail: 4,id_kelas_benefit: 4},

      {id_kelas_detail: 5,id_kelas_benefit: 1},{id_kelas_detail: 5,id_kelas_benefit: 2},{id_kelas_detail: 5,id_kelas_benefit: 3},{id_kelas_detail: 5,id_kelas_benefit: 4},

      {id_kelas_detail: 6,id_kelas_benefit: 1},{id_kelas_detail: 6,id_kelas_benefit: 2},{id_kelas_detail: 6,id_kelas_benefit: 3},{id_kelas_detail: 6,id_kelas_benefit: 4},

    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_detail_benefit", null, {});
  }
};
