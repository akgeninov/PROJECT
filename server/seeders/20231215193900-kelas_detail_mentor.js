'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kelas_detail_mentor", [
      {id_kelas_detail: 1,id_kelas_mentor: 1},
      {id_kelas_detail: 2,id_kelas_mentor: 2},
      {id_kelas_detail: 3,id_kelas_mentor: 3},
      {id_kelas_detail: 4,id_kelas_mentor: 1},
      {id_kelas_detail: 5,id_kelas_mentor: 2},
      {id_kelas_detail: 6,id_kelas_mentor: 3},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kelas_detail_mentor", null, {});
  }
};
