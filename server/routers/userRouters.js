const router = require("express").Router();
const { userControllers } = require("../controllers");

router.get("/", userControllers.getAllUser);

module.exports = router;
