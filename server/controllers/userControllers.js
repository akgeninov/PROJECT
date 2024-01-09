const db = require("../models");
const user = db.User;
const userPribadi = db.user_pribadi;
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
        include: [role, userPribadi],
      });

      if (!result) throw new Error("failed to get user data");

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

      const getUsername = await user.findAll({
        where: {
          username: body.username,
        },
      });

      if (getUsername.length > 1) throw new Error("Username sudah di pakai");

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
  changePassword: async (req, res) => {
    try {
      const userData = req.dataToken;
      const { confirm_password, password, old_password } = req.body;

      if (confirm_password !== password)
        return utility.createResponse(res, 400, false, "Password tidak sama");

      const getUser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["password", "uid_firebase"],
      });

      if (!getUser) throw new Error("User tidak ditemukan");
      if (getUser.uid_firebase)
        throw new Error(
          "akun anda tidak membutuhkan password, jika ingin mengubah password, ubah password anda di google!"
        );

      const passwordMatch = await bcrypt.compare(
        old_password,
        getUser.password
      );

      if (!passwordMatch) throw new Error("Password lama salah!");

      const hashedPassword = await bcrypt.hash(password, 10);
      const updatePassword = await user.update(
        {
          password: hashedPassword,
        },
        {
          where: {
            email: userData.email,
          },
        }
      );
      if (!updatePassword) {
        throw new Error("Failed to change password");
      }

      res.status(200).send({
        message: "Berhasil mengubah password",
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  editLinkSosmed: async (req, res) => {
    try {
      const userData = req.dataToken;
      const { insta, facebook, linkedin } = req.body;
      if (!insta) throw new Error("insta kosong");
      const getOne = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      if (!getOne) throw new Error("User not found");
      console.log({ getOne });

      const result = await userPribadi.update(
        {
          link_ig: insta,
          link_fb: facebook,
          link_linkedid: linkedin,
        },
        {
          where: {
            id_user: getOne.id,
          },
        }
      );

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
