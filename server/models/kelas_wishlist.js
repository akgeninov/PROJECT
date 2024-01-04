'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_wishlist extends Model {
    static associate(models) {
      kelas_wishlist.belongsTo(models.user,{
        foreignKey: {
          name: "id_user",
        }
      });
      kelas_wishlist.belongsTo(models.kelas_bisnis,{
        foreignKey: {
          name: "id_kelas_bisnis",
        }
      })
    }
  }
  kelas_wishlist.init({
    id_user: DataTypes.INTEGER,
    id_kelas_bisnis: DataTypes.INTEGER,
    date_wishlist: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'kelas_wishlist',
  });
  return kelas_wishlist;
};