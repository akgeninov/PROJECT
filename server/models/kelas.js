'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    static associate(models) {
      kelas.belongsTo(models.kategori_kelas, {
        foreignKey: {
          name: "kategori",
        }
      });
      kelas.belongsTo(models.level_kelas, {
        foreignKey: {
          name: "level",
        }
      });
      kelas.belongsTo(models.akses_kelas, {
        foreignKey: {
          name: "akses",
        }
      });
    }
  }
  kelas.init({
    nama_kelas: DataTypes.STRING,
    total_pendaftar: DataTypes.INTEGER,
    harga_kelas: DataTypes.DECIMAL,
    diskon: DataTypes.DECIMAL,
    rating: DataTypes.FLOAT,
    gambar: DataTypes.BLOB,
    id_kategori_kelas: DataTypes.INTEGER,
    id_level_kelas: DataTypes.INTEGER,
    id_akses_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};