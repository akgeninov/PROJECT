'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_regist extends Model {
    static associate(models) {
      kelas_regist.belongsTo(models.User, {foreignKey: {name: "id_user"}});
      kelas_regist.belongsTo(models.kelas_bisnis, { foreignKey: 'id_kelas_regist'});
    }
  }
  kelas_regist.init({
    tgl_daftar: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'kelas_regist',
    tableName: 'kelas_regist',
  });
  return kelas_regist;
};