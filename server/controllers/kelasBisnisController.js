const {
  kelas_detail,
  kelas_materi,
  kelas_benefit,
  kelas_mentor,
  kelas_rating,
  kelas_regist,
} = require("../models");
const {
  kelas_bisnis,
  kelas_kategori,
  kelas_level,
  kelas_diskon,
  sequelize,
  User,
} = require("../models");
const { Sequelize } = require("sequelize");
const utility = require("./utility");
const { Op } = require("sequelize");

module.exports = {
  getKategoriKelas: async (req, res) => {
    try {
      const result = await kelas_kategori.findAll({
        attributes: ["id", "nama"],
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

  getLevelKelas: async (req, res) => {
    try {
      const result = await kelas_level.findAll({
        attributes: ["id", "nama"],
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

  getKelasBisnis: async (req, res) => {
    try {
      const { kategori, level, harga1, harga2 } = req.body;
      let dataKelas;
      if (kategori.length > 0 || level.length > 0) {
        if (kategori.length > 0 && level.length === 0) {
          dataKelas = await kelas_bisnis.findAll({
            where: {
              id_kelas_kategori: {
                [Op.in]: kategori,
              },
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        } else if (kategori.length === 0 && level.length > 0) {
          console.log("sini");
          dataKelas = await kelas_bisnis.findAll({
            where: {
              id_kelas_level: {
                [Op.in]: level,
              },
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        } else {
          dataKelas = await kelas_bisnis.findAll({
            where: {
              id_kelas_level: {
                [Op.in]: level,
              },
              id_kelas_kategori: {
                [Op.in]: kategori,
              },
            },
            include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
          });
        }
      } else {
        dataKelas = await kelas_bisnis.findAll({
          include: [kelas_kategori, kelas_level, kelas_regist, kelas_rating],
        });
      }

      const dataUser = await User.findAll();

      //   const result = await kelas_bisnis.findAll({
      //     attributes: [
      //       "id",
      //       "nama",
      //       "image",
      //       "images_link",
      //       "harga",
      //       [
      //         sequelize.literal(
      //           "ROUND(COALESCE(SUM(kelas_ratings.nilai), 0) / COUNT(DISTINCT kelas_ratings.id_user),1)"
      //         ),
      //         "rata_nilai",
      //       ],
      //       [
      //         sequelize.fn(
      //           "COUNT",
      //           sequelize.fn("DISTINCT", sequelize.col("kelas_ratings.id_user"))
      //         ),
      //         "jumlah_penilai",
      //       ],
      //       [
      //         sequelize.literal(
      //           "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisnis.id)"
      //         ),
      //         "jumlah_pendaftar",
      //       ],
      //     ],
      //     include: [
      //       { model: kelas_kategori, attributes: ["nama"] },
      //       { model: kelas_level, attributes: ["nama"] },
      //       { model: kelas_rating, attributes: [] },
      //       {
      //         model: kelas_diskon,
      //         attributes: ["nama", "jumlah_persen"],
      //         through: { attributes: [] },
      //       },
      //     ],
      //     where: {
      //       ...(kategori ? { "$kelas_kategori.id$": kategori } : {}),
      //       ...(level ? { "$kelas_level.id$": level } : {}),
      //       ...(harga1 && harga2
      //         ? { harga: { [Op.between]: [harga1, harga2] } }
      //         : {}),
      //     },
      //     group: ["kelas_bisnis.id"],
      //   });

      //   res.json(dataKelas, dataUser);
      res.status(200).send({
        dataUser,
        dataKelas,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },

  getDetailKelasBisnis: async (req, res) => {
    try {
      const { id } = req.body;
      const result = await kelas_detail.findAll({
        where: {
          ...(id ? { id: id } : {}),
        },
        attributes: ["id", "deskripsi", "id_kelas_bisnis"],
        include: [
          {
            model: kelas_materi,
            attributes: ["materi", "link", "deskripsi"],
            through: { attributes: [] },
          },
          {
            model: kelas_benefit,
            attributes: ["benefit", "image", "images_link", "deskripsi"],
            through: { attributes: [] },
          },
          {
            model: kelas_mentor,
            attributes: [
              "nama",
              "jabatan",
              "perusahaan",
              "deskripsi",
              "image",
              "images_link",
            ],
            through: { attributes: [] },
          },
          {
            model: kelas_rating,
            attributes: [
              "komentar",
              "id_user",
              //  [sequelize.literal('(SELECT SUM(nilai) FROM kelas_rating WHERE kelas_rating.id_kelas_bisnis = kelas_detail.id_kelas_bisnis)'), 'total_nilai']
            ],
            limit: 2,
            required: false,
            include: [
              {
                model: User,
                attributes: [
                  "nama_user",
                  "profile_picture",
                  "picture_link",
                  "nama_bisnis",
                ],
                required: false,
              },
            ],
          },
          {
            model: kelas_bisnis,
            attributes: [
              "nama",
              [
                sequelize.literal(
                  "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisni.id)"
                ),
                "jumlah_pendaftar",
              ],
              [
                sequelize.literal(
                  "(SELECT ROUND(SUM(nilai) / COUNT(id_user),1) FROM kelas_rating WHERE kelas_rating.id_kelas_bisnis = kelas_bisni.id)"
                ),
                "total_nilai",
              ],
            ],
            include: [
              { model: kelas_kategori, attributes: ["nama"] },
              { model: kelas_level, attributes: ["nama"] },
              { model: kelas_regist, attributes: [] },
              {
                model: kelas_diskon,
                attributes: ["nama", "jumlah_persen"],
                through: { attributes: [] },
              },
              {
                model: kelas_rating,
                attributes: [],
              },
            ],
          },
        ],
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // untuk testing thoriq
  getKelasBisnisTest: async (req, res) => {
    try {
      const { kategori, level } = req.body;
      //cek or create view rating regist
      await db.sequelize.query(utility.viewRatingRegist);

      let query = `
                SELECT 
                    kelas_bisnis.nama,
                    kelas_bisnis.harga,
                    view_rating_regist.rating,
                    view_rating_regist.jumlah_penilai,
                    view_rating_regist.jumlah_pendaftar,
                    kelas_kategori.nama AS kategori,
                    kelas_level.nama AS level
                FROM kelas_bisnis
                LEFT JOIN kelas_kategori ON kelas_bisnis.id_kelas_kategori = kelas_kategori.id
                LEFT JOIN kelas_level ON kelas_bisnis.id_kelas_level = kelas_level.id
                LEFT JOIN view_rating_regist ON kelas_bisnis.id = view_rating_regist.kelas_bisnis_id
            `;
      if (kategori) query = query + " WHERE kelas_kategori.id = :kategori";
      if (level) query = query + " AND kelas_level.id = :level";

      const result = await db.sequelize.query(query, {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          kategori,
          level,
        },
        model: kelas_bisnis,
        mapToModel: true,
        include: [kelas_kategori, kelas_level],
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

  getKelasBisnisBackup: async (req, res) => {
    try {
      const { kategori, level, harga1, harga2 } = req.body;

      const result = await kelas_bisnis.findAll({
        attributes: [
          "id",
          "nama",
          "image",
          "images_link",
          "harga",
          [
            sequelize.literal(
              "ROUND(COALESCE(SUM(kelas_ratings.nilai), 0) / COUNT(DISTINCT kelas_ratings.id_user),1)"
            ),
            "rata_nilai",
          ],
          [
            sequelize.fn(
              "COUNT",
              sequelize.fn("DISTINCT", sequelize.col("kelas_ratings.id_user"))
            ),
            "jumlah_penilai",
          ],
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_kelas_bisnis = kelas_bisnis.id)"
            ),
            "jumlah_pendaftar",
          ],
        ],
        include: [
          { model: kelas_kategori, attributes: ["nama"] },
          { model: kelas_level, attributes: ["nama"] },
          { model: kelas_rating, attributes: [] },
          {
            model: kelas_diskon,
            attributes: ["nama", "jumlah_persen"],
            through: { attributes: [] },
          },
        ],
        where: {
          ...(kategori ? { "$kelas_kategori.id$": kategori } : {}),
          ...(level ? { "$kelas_level.id$": level } : {}),
          ...(harga1 && harga2
            ? { harga: { [Op.between]: [harga1, harga2] } }
            : {}),
        },
        group: ["kelas_bisnis.id"],
      });

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
