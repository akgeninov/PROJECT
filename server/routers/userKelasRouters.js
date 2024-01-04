const router = require("express").Router();
const { userKelasController } = require("../controllers");

router.post("/userKelasAll", userKelasController.kelasUserAll);


module.exports = router;
