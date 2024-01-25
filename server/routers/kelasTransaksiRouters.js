const router = require("express").Router();
const kelasTransaksiController = require("../controllers/kelasTransaksiController");
const { verifyToken } = require("../middleware/verifyToken");

router.put("/changeTransaksiBool", verifyToken, kelasTransaksiController.changeTransaksiBool);
router.post("/createTransaksi", verifyToken, kelasTransaksiController.createTransaksi);
router.put("/updateStatusTransaksi", verifyToken, kelasTransaksiController.updateStatusTransaksi);
router.get("/getTransaksiByIdUser", verifyToken, kelasTransaksiController.getTransaksiByIdUser);
router.get("/:id_kelas_bisnis", verifyToken, kelasTransaksiController.getCheckout);

module.exports = router;
