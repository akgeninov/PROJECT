const router = require("express").Router();
const { artikelController } = require("../controllers");

router.get("/all", artikelController.getAllArtikel);
router.post("/kategori", artikelController.getAllArtikelByKategori);

module.exports = router;
