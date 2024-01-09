'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas_wishlist extends Model {
    static associate(models) {
      kelas_wishlist.belongsTo(models.User,{
        foreignKey: {
          name: "id_user"
        }
      }),
      kelas_wishlist.belongsTo(models.kelas_bisnis,{
        foreignKey: {
          name: "id_kelas_bisnis",
        }
      })
      // kelas_wishlist.belongsTo(models.kelas_kategori,{
      //   foreignKey: {
      //     name: "id_kelas_kategori",
      //   }
      // })
    }
  }
  kelas_wishlist.init({
    date_wishlist: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'kelas_wishlist',
  });
  return kelas_wishlist;
};