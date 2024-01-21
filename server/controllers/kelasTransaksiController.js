const db = require("../models");
const user = db.User;
const kelasBisnisModel = db.kelas_bisnis;
const kelasBisnisDiskonModel = db.kelas_bisnis_diskon;
const kelasDiskonModel = db.kelas_diskon;
const kelasTransaksiModel = db.kelas_transaksi;

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

      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }

      const { id_kelas_bisnis, status_transaksi } = req.body;

      if (
        status_transaksi &&
        !["success", "canceled", "pending"].includes(status_transaksi)
      ) {
        return res.status(400).send({
          error:
            "Invalid value for 'status_transaksi'. Please provide a valid value.",
        });
      }

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

      // Check if kelasDiskon exists before accessing its properties
      const total = kelasDiskon ? harga * ((100 - persenDiskon) / 100) : harga;

      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() + 7);
      const expiredDate = new Date(currentDate);
      expiredDate.setHours(expiredDate.getHours() + 24);

      const result = await kelasTransaksiModel.create({
        id_user: getuser.id,
        id_kelas_bisnis: id_kelas_bisnis,
        harga: harga,
        persen_diskon: persenDiskon,
        total: total,
        status_transaksi: status_transaksi,
        date_transaksi: currentDate,
        date_expired: expiredDate,
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

  getTransaksiByIdUser: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
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

  getTransaksiByIdUserSuccess: async (req, res) => {
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
          status_transaksi: ["success"],
        },
        include: [
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
            through: { attributes: [] },
          },
        ],
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
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
  getTransaksiByIdUserPending: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["pending"],
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
  getTransaksiByIdUserCanceled: async (req, res) => {
    try {
      const userData = req.dataToken;
      const getuser = await user.findOne({
        where: {
          email: userData.email,
        },
        attributes: ["id"],
      });
      // console.log({ userData });
      if (!getuser) {
        throw new Error("USER TIDAK DITEMUKAN");
      }
      const result = await kelasTransaksiModel.findAll({
        where: {
          id_user: getuser.id,
          status_transaksi: ["canceled"],
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

  getTransaksiInvoice: async (req, res) => {
    try {
      // const userData = req.dataToken;
      // const getuser = await user.findOne({
      //   where: {
      //     email: userData.email,
      //   },
      //   attributes: ["id"],
      // });
      // // console.log({ userData });
      // if (!getuser) {
      //   throw new Error("USER TIDAK DITEMUKAN");
      // }
      const { id } = req.body;
      const result = await kelasTransaksiModel.findAll({
        where: {
          ...(id ? { id: id } : {}),
        },
        attributes: [
          "id",
          "nomor_invoice",
          "date_transaksi",
          "status_transaksi",
        ],
        include: [
          {
            model: user,
            attributes: ["nama_lengkap", "email"],
            through: { attributes: [] },
          },
          {
            model: kelasBisnisModel,
            attributes: ["nama", "image", "harga", "images_link"],
            through: { attributes: [] },
          },
        ],
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
