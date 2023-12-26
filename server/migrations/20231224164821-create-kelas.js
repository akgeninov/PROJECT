'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_kelas: {
        type: Sequelize.STRING
      },
      total_pendaftar: {
        type: Sequelize.INTEGER
      },
      harga_kelas: {
        type: Sequelize.DECIMAL
      },
      diskon: {
        type: Sequelize.DECIMAL
      },
      rating: {
        type: Sequelize.FLOAT
      },
      gambar: {
        type: Sequelize.BLOB
      },
      id_kategori_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "kategori_kelas",
          },
          key: "id",
        },
      },
      id_level_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "level_kelas",
          },
          key: "id",
        },
      },
      id_akses_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "akses_kelas",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kelas');
  }
};