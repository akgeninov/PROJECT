'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    id_level_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas',
  });
  return kelas;
};