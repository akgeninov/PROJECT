"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: {
          name: "role_id",
        },
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      no_hp: DataTypes.STRING,
      nama_user: DataTypes.STRING,
      nama_bisnis: DataTypes.STRING,
      tgl_berdiri: DataTypes.DATE,
      kota: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
