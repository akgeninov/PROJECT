const router = require("express").Router();
const { verifyToken } = require("../middleware/verifyToken");
const { userKelasController } = require("../controllers");

router.post("/all", userKelasController.kelasUserAll);
router.post("/nonProgess", userKelasController.kelasUserNonProgress);
router.post("/progress", userKelasController.kelasUserProgress);
router.post("/complete", userKelasController.kelasUserComplete);
router.post("/progress/last", userKelasController.kelasUserLastProgress);
router.post("/detail", verifyToken, userKelasController.kelasUserDetail);
router.post("/materi/mulai", verifyToken, userKelasController.MulaiMateriUser);

module.exports = router;
