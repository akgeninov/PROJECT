const router = require("express").Router();
const { userControllers } = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/", userControllers.getAllUser);
router.post("/check/username", userControllers.usernameCheck);
router.post("/check/phone", userControllers.phoneCheck);
router.get("/one-user", verifyToken, userControllers.getOneUser);

module.exports = router;
