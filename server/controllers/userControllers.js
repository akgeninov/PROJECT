const db = require("../models");
const user = db.User;
const role = db.Role;
const bcrypt = require("bcrypt");
const utility = require("./utility");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const result = await user.findAll({
        include: [
          {
            model: role,
            attributes: ["nama_role"],
          },
        ],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  usernameCheck: async (req, res) => {
    const { username } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user, "username", username, res);
  },

  phoneCheck: async (req, res) => {
    const { no_hp } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user, "no_hp", no_hp, res);
  },

  emailCheck: async (req, res) => {
    const { email } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user, "email", email, res);
  },

  getOneUser: async (req, res) => {
    try {
      const dataUser = req.dataToken;

      const result = await user.findOne({
        where: {
          email: dataUser.email,
        },
        attributes: [
          "email",
          "nama_lengkap",
          "profile_picture",
          "no_hp",
          "id_role",
          "username",
          "nama_depan",
          "nama_belakang",
          "biografi",
        ],
        include: [role],
      });

      res.status(200).send({
        message: "succes",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
