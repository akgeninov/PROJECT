'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class periode_pekerjaan extends Model {
    static associate(models) {
      // define association here
    }
  }
  periode_pekerjaan.init({
    nama_periode_perkerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'periode_pekerjaan',
  });
  return periode_pekerjaan;
};