const router = require("express").Router();
const kelasTransaksiController = require("../controllers/kelasTransaksiController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/addToKelasTransaksi", verifyToken, kelasTransaksiController.addToKelasTransaksi);
router.get("/getTransaksiByIdUser", verifyToken, kelasTransaksiController.getTransaksiByIdUser);

module.exports = router;
