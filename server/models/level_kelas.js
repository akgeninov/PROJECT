'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class level_kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  level_kelas.init({
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'level_kelas',
  });
  return level_kelas;
};