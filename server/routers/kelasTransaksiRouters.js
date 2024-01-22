const router = require("express").Router();
const kelasTransaksiController = require("../controllers/kelasTransaksiController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/changeTransaksiBool", verifyToken, kelasTransaksiController.changeTransaksiBool);
router.put("/updateStatusTransaksi", verifyToken, kelasTransaksiController.updateStatusTransaksi);
router.get("/getTransaksiByIdUser", verifyToken, kelasTransaksiController.getTransaksiByIdUser);
router.get("/transaksi-saya/success", verifyToken, kelasTransaksiController.getTransaksiByIdUserSuccess);
router.get("/transaksi-saya/pending", verifyToken, kelasTransaksiController.getTransaksiByIdUserPending);
router.get("/transaksi-saya/canceled", verifyToken, kelasTransaksiController.getTransaksiByIdUserCanceled);
router.post("/transaksi-saya/invoice", verifyToken, kelasTransaksiController.getTransaksiInvoice);

module.exports = router;
