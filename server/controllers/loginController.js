const db = require("../models");
const user = db.User;
const role = db.Role;
const bcrypt = require("bcrypt");
const utility = require("./utility");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password, uid_firebase, display_name } = req.body;

      if (uid_firebase) {
        const uidGoogleIsExist = await user.findOne({
          where: { uid_firebase },
        });

        if (uidGoogleIsExist) {
          console.log({ email: uidGoogleIsExist.email });
          const jwt = utility.makeJWT(uidGoogleIsExist);
          res.status(200).send({
            message: "succes",
            data: uidGoogleIsExist,
            token: jwt,
          });
        } else {
          const creatUser = await user.create({
            nama_user: display_name,
            uid_firebase,
            email,
            role_id: 3,
            profile_picture: "chibi2.jpg",
          });

          const jwt = utility.makeJWT(creatUser);
          res.status(200).send({
            message: "succes",
            data: creatUser,
            token: jwt,
          });
        }
      } else {
        const existingUser = await user.findOne({
          where: { email },
        });

        if (!existingUser) {
          return res.status(404).json({ error: "User not found" });
        }
        console.log(password);
        console.log(existingUser.password);

        const passwordMatch = await bcrypt.compare(
          password,
          existingUser.password
        );

        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid password" });
        }
        console.log(existingUser);
        const jwt = utility.makeJWT(existingUser);
        res.status(200).json({
          message: "Login successful",
          user: existingUser,
          token: jwt,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  register: async (req, res) => {
    const {
      nama_user,
      password,
      email,
      no_hp,
      nama_bisnis,
      tgl_berdiri,
      kota,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //cek no_hp
    await utility.checkAvailableColumn(user, "no_hp", no_hp, res);

    //cek no_hp
    await utility.checkAvailableColumn(user, "email", email, res);

    try {
      const newUser = await user.create({
        nama_user,
        password: hashedPassword,
        email,
        no_hp,
        nama_bisnis,
        tgl_berdiri,
        kota,
        role_id: 3,
      });

      res.status(201).json({ user: "newUser" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
