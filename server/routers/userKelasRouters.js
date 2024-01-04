const router = require("express").Router();
const { userKelasController } = require("../controllers");

router.post("/all", userKelasController.kelasUserAll);
router.post("/nonProgess", userKelasController.kelasUserNonProgress);
router.post("/progress", userKelasController.kelasUserProgress);
router.post("/complete", userKelasController.kelasUserComplete);
router.post("/progress/last", userKelasController.kelasUserLastProgress);


module.exports = router;
