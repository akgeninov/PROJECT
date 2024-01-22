const db = require("../models");
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasBisnisDiskonModel = db.kelas_bisnis_diskon;
const kelasDiskonModel = db.kelas_diskon;
const kelasTransaksiModel = db.kelas_transaksi;

module.exports = {
  changeTransaksiBool: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      const { id_kelas_bisnis } = req.body;

      const existingTransaksi = await kelasTransaksiModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
      });

      const kelasBisnis = await kelasBisnisModel.findByPk(id_kelas_bisnis);
      if (!kelasBisnis) {
        throw new Error(`Kelas bisnis with id ${id_kelas_bisnis} not found.`);
      }

      const kelasBisnisDiskon = await kelasBisnisDiskonModel.findOne({
        where: { id_kelas_bisnis: kelasBisnis.id },
      });

      const kelasDiskon = kelasBisnisDiskon
        ? await kelasDiskonModel.findByPk(kelasBisnisDiskon.id_kelas_diskon)
        : null;

      const harga = kelasBisnis.harga;
      const persenDiskon = kelasDiskon ? kelasDiskon.jumlah_persen : 0;
      const total = kelasDiskon ? harga * ((100 - persenDiskon) / 100) : harga;

      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 7);
      const expiredDate = new Date(currentDate);
      expiredDate.setHours(expiredDate.getHours() + 24);

      if(existingTransaksi){
        const updatedValue = !existingTransaksi.isPaid;
        await existingTransaksi.update({isPaid: updatedValue});

        res.status(200).send({
          message: `Transaksi isPaid bool updated to ${updatedValue}`,
          data: existingTransaksi,
        });
      }
      else {
        const result = await kelasTransaksiModel.create({
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
          harga: harga,
          persen_diskon: persenDiskon,
          total: total,
          date_transaksi: currentDate,
          date_expired: expiredDate,
        });
  
        res.status(200).send({
          message: "Transaksi created",
          data: result,
        });
      }
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },

  updateStatusTransaksi: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
  
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
  
      const { id, status_transaksi } = req.body;
  
      const transaction = await kelasTransaksiModel.findOne({
        where: {
          id: id,
          id_user: getuser.id,
        },
      });
  
      if (!transaction) {
        throw new Error(`Transaction with id ${id} not found for the current user.`);
      }
  
      if (status_transaksi && ['success', 'canceled', 'pending'].includes(status_transaksi)) {
        await transaction.update({ status_transaksi: status_transaksi });
  
        res.status(200).send({
          message: "Transaction status updated",
          data: transaction,
        });
      } else {
        res.status(400).send({
          error: "Invalid value for 'status_transaksi'. Please provide a valid value.",
        });
      }
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
  
  getTransaksiByIdUser: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
        },
        include: [user, kelasBisnisModel],
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

  getCheckout: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
  
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
  
      const id_kelas_bisnis = req.params.id_kelas_bisnis; 
      
      const result = await kelasTransaksiModel.findOne({
        where: {
          id_user: getuser.id,
          id_kelas_bisnis: id_kelas_bisnis,
        },
        include: [user, kelasBisnisModel],
      });
  
      if (!result) {
        throw new Error("DATA CHECKOUT TIDAK DITEMUKAN");
      }
      
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
  
};
