const db = require("../models");
const artikel = db.Artikel;
const kategoriModel = db.Kategori;
const bcrypt = require("bcrypt");
const utility = require("./utility");

module.exports = {
  getAllArtikel: async (req, res) => {
    try {
      const result = await artikel.findAll({
        include: [
          {
            model: kategoriModel,
            attributes: ["nama_kategori"],
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

  getAllArtikelByKategori: async (req, res) => {
    try {
      const { kategori } = req.body;
      console.log({ res: kategori });
      const result = await artikel.findAll({
        include: [
          {
            model: kategoriModel,
            attributes: ["nama_kategori"],
            where: {
              nama_kategori: kategori,
            },
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
};
