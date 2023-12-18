"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "user1@gmail.com",
        password: "qwerty123",
        no_hp: "080000000001",
        nama_user: "user1",
        nama_bisnis: "bisnis user 1",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Jakarta",
        profile_picture: "default.jpg",
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin@gmail.com",
        password: "qwerty123",
        no_hp: "080000000002",
        nama_user: "admin",
        nama_bisnis: null,
        tgl_berdiri: null,
        kota: null,
        profile_picture: "default.jpg",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "super@gmail.com",
        password: "qwerty123",
        no_hp: "080000000003",
        nama_user: "super",
        nama_bisnis: null,
        tgl_berdiri: null,
        kota: null,
        profile_picture: "default.jpg",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
