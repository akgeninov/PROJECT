const db = require("../models");
const kelasWishlistModel = db.kelas_wishlist;
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
//const kelasKategoriModel = db.kelas_kategori;

module.exports = {
    getWishlistByIdUSer: async (req, res) => {
        try {
          const userData = req.dataToken;
          const getuser = await user.findOne({
            where: {
              email: userData.email,
            },
            attributes: ["id"],
          });
          console.log({userData});
          if(!getuser) {
            throw new Error("USER TIDAK DITEMUKAN");
          }
          const result = await kelasWishlistModel.findAll({
            where: {
              id_user: getuser.id,
            },
            include: [
              user, kelasBisnisModel
            ],
          });
    
          res.status(200).send({
            message: "success",
            data: result,
          });
        } catch (error) {
          res.status(400).send({
            error: error.message,
          });
        }
      },

      addToWishlist: async (req, res) => {
        try {
          const userData = req.dataToken;
          const getuser = await user.findOne({
            where: {
              email: userData.email,
            },
            attributes: ["id"],
          });
          console.log({userData});
          if(!getuser) {
            throw new Error("USER TIDAK DITEMUKAN");
          }

          const { id_kelas_bisnis } = req.body;   
          const result = await kelasWishlistModel.create({
            id_user: getuser.id,
            id_kelas_bisnis: id_kelas_bisnis,
            date_wishlist: new Date(), 
          });
    
          res.status(200).send({
            message: "success",
            data: result,
          });
        } catch (error) {
          res.status(400).send({
            error: error.message,
          });
        }
      },
}