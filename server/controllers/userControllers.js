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
  editUserData: async (req, res) => {
    try {
      const userData = req.dataToken;
      const data = req.file;
      const body = req.body;

      console.log({ data });

      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      let updataUser;
      if (!data) {
        updataUser = await user.update(
          {
            nama_lengkap: body.nama_depan + " " + body.nama_belakang,
            username: body.username,
            nama_depan: body.nama_depan,
            nama_belakang: body.nama_belakang,
            biografi: body.biodata,
          },
          {
            where: {
              id: getuser.id,
            },
          }
        );
      } else {
        updataUser = await user.update(
          {
            nama_lengkap: body.nama_depan + " " + body.nama_belakang,
            username: body.username,
            nama_depan: body.nama_depan,
            nama_belakang: body.nama_belakang,
            biografi: body.biodata,
            profile_picture: data.filename,
          },
          {
            where: {
              id: getuser.id,
            },
          }
        );
      }

      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
