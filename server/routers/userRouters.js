const router = require("express").Router();
const { userControllers } = require("../controllers");

router.get("/", userControllers.getAllUser);
router.post("/login", userControllers.login);
router.post("/register", userControllers.register);
router.post("/check/username", userControllers.usernameCheck);
router.post("/check/phone", userControllers.phoneCheck);

module.exports = router;
