const router = require("express").Router();
const kelasTransaksiController = require("../controllers/kelasTransaksiController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/changeTransaksiBool", verifyToken, kelasTransaksiController.changeTransaksiBool);
router.put("/updateStatusTransaksi", verifyToken, kelasTransaksiController.updateStatusTransaksi);
router.get("/getTransaksiByIdUser", verifyToken, kelasTransaksiController.getTransaksiByIdUser);

module.exports = router;
