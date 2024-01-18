const router = require("express").Router();
const kelasTransaksiController = require("../controllers/kelasTransaksiController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/addToKelasTransaksi", verifyToken, kelasTransaksiController.addToKelasTransaksi);
router.get("/getTransaksiByIdUser", verifyToken, kelasTransaksiController.getTransaksiByIdUser);
router.get("/getTransaksiByIdUser/success", verifyToken, kelasTransaksiController.getTransaksiByIdUserSuccess);
router.get("/getTransaksiByIdUser/pending", verifyToken, kelasTransaksiController.getTransaksiByIdUserPending);
router.get("/getTransaksiByIdUser/canceled", verifyToken, kelasTransaksiController.getTransaksiByIdUserCanceled);

module.exports = router;
