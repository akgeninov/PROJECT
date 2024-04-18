'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departemen extends Model {
    static associate(models) {
      // define association here
    }
  }
  departemen.init({
    nama_departemen_pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'departemen',
  });
  return departemen;
};