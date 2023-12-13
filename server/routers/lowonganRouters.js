const router = require("express").Router();
const { lowonganController } = require("../controllers");

router.get("/departemen", lowonganController.getAllDepartemen)

module.exports = router;
