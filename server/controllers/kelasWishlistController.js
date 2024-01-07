const db = require("../models");
const kelasWishlistModel = db.kelas_wishlist;
const userModel = db.USer;
const kelasBisnisModel = db.kelas_bisnis;

module.exports = {
    getWishlistByIdUSer: async (req, res) => {
        try {
          const result = await kelasWishlistModel.findAll({
            where: {
              id_user: req.params.id_user,
            },
            include: [
              { model: db.sequelize.model("User") },
              { model: db.sequelize.model("kelas_bisnis") },
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
          const { id_user, id_kelas_bisnis } = req.body;
    
          const result = await kelasWishlistModel.create({
            id_user: id_user,
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