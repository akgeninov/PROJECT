'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_materi extends Model {
    static associate(models) {
      kelas_materi.belongsToMany(models.kelas_detail, { through: 'kelas_detail_materi', foreignKey: 'id_kelas_materi'});
    }
  }
  kelas_materi.init({
    materi: DataTypes.STRING,
    link: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas_materi',
    tableName: 'kelas_materi'
  });
  return kelas_materi;
};