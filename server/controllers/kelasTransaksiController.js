const db = require("../models");
// const kelasWishlistModel = db.kelas_wishlist;
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasTransaksiModel = db.kelas_transaksi;
// const kelasKategoriModel = db.kelas_kategori;
// const kelasLevelModel = db.kelas_level;
// const kelasRegistModel = db.kelas_regist;
// const kelasRatingModel = db.kelas_rating;

module.exports = {
      addToKelasTransaksi: async (req, res) => {
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

          const { id_kelas_bisnis, status_transaksi } = req.body;   
          if (status_transaksi && !['success', 'canceled', 'pending'].includes(status_transaksi)) {
            return res.status(400).send({
              error: "Invalid value for 'status_transaksi'. Please provide a valid value.",
            });
          }
          const result = await kelasTransaksiModel.create({
            id_user: getuser.id,
            id_kelas_bisnis: id_kelas_bisnis,
            status_transaksi: status_transaksi,
            date_transaksi: new Date(),
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

