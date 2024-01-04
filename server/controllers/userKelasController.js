const {
    sequelize,
    kelas_bisnis,
    kelas_regist,
    kelas_detail,
    kelas_materi,
    sub_materi_kelas
} = require("../models");

module.exports = {
    kelasUserAll: async (req, res) => {
        try {
            const { userID } = req.body;

            const result = await kelas_bisnis.findAll({
                include:[
                    {
                        model: kelas_regist,
                        attributes: ["id_user", "progess", "persen",],
                        where: {id_user : userID},
                    },
                    { 
                        model: kelas_detail, 
                        attributes: [],
                    },

                ],
                attributes: ["id", "nama", "image", "images_link", [sequelize.literal('(SELECT COUNT(*) FROM kelas_detail_materi WHERE kelas_detail_materi.id_kelas_detail = kelas_detail.id)'), 'total_materi']],
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
    }
};
