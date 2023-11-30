const db = require("../models");
const user = db.User;
const role = db.Role;
const bcrypt = require('bcrypt');
const utility = require('./utility');

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const result = await user.findAll({
        include: [{
          model: role,
          attributes: ['nama_role'],
        }],
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

  login: async (req, res) => {
    try {
      const { nama_user, password } = req.body;

      const existingUser = await user.findOne({
        where: { nama_user },
      });

      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, existingUser.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      res.status(200).json({ message: 'Login successful', user: existingUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  register : async (req, res) => {
      const { 
        nama_user, 
        password,
        email,
        no_hp,
        nama_bisnis,
        tgl_berdiri,
        kota
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);
      

      //cek no_hp
      await utility.checkAvailableColumn(user,'no_hp',no_hp,res)

      //cek no_hp
      await utility.checkAvailableColumn(user,'email',email,res)

    try {
  
      const newUser = await user.create({
        nama_user,
        password: hashedPassword,
        email,
        no_hp,
        nama_bisnis,
        tgl_berdiri,
        kota,
        role_id: 3
      });
  
      res.status(201).json({ user: "newUser" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  usernameCheck : async (req, res) => {
    const { 
      nama_user, 
    } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user,'nama_user',nama_user,res)
  },

  phoneCheck : async (req, res) => {
    const { 
      no_hp, 
    } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user,'no_hp',no_hp,res)
  },

  emailCheck : async (req, res) => {
    const { 
      email, 
    } = req.body;
    //cek nama user
    await utility.checkAvailableColumn(user,'email',email,res)
  }
};
