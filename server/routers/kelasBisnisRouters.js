const router = require("express").Router();
const { kelasBisnisController } = require("../controllers");

router.post("/kategori", kelasBisnisController.getKategoriKelas);
router.post("/level", kelasBisnisController.getLevelKelas);
router.post("/data", kelasBisnisController.getKelasBisnis);
router.post("/detail", kelasBisnisController.getDetailKelasBisnis);

module.exports = router;
