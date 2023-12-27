"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        no_hp: null,
        nama_user: "admin",
        nama_bisnis: null,
        tgl_berdiri: null,
        kota: null,
        profile_picture: null,
        role_id: 1,
        uid_firebase: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "superadmin@gmail.com",
        password: "123456",
        no_hp: null,
        nama_user: "super admin",
        nama_bisnis: null,
        tgl_berdiri: null,
        kota: null,
        profile_picture: null,
        role_id: 2,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "sherina@gmail.com",
        password: "123456",
        no_hp: "080000000001",
        nama_user: "Sherina",
        nama_bisnis: "Beautycare",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Jakarta",
        profile_picture: "chibi1.jpg",
        role_id: 3,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "marlina@gmail.com",
        password: "123456",
        no_hp: "080000000001",
        nama_user: "Marlina",
        nama_bisnis: "Laundryes",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Surabaya",
        profile_picture: "chibi2.jpg",
        role_id: 3,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "lala@gmail.com",
        password: "123456",
        no_hp: "080000000001",
        nama_user: "Lala Poo",
        nama_bisnis: "Restokuy",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Cirebon",
        profile_picture: "chibi3.jpg",
        role_id: 3,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "friyen@gmail.com",
        password: "123456",
        no_hp: "080000000003",
        nama_user: "Friyen",
        nama_bisnis: "Sukidesu",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Palembang",
        profile_picture: "chibi4.jpg",
        role_id: 3,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "yuka@gmail.com",
        password: "123456",
        no_hp: "080000000003",
        nama_user: "Yuka",
        nama_bisnis: "Toserbadas",
        tgl_berdiri: new Date("11/2/2002"),
        kota: "Ngawi",
        profile_picture: "chibi5.jpg",
        role_id: 3,
        uid_firebase: null,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
