'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class akses_kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  akses_kelas.init({
    akses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'akses_kelas',
  });
  return akses_kelas;
};