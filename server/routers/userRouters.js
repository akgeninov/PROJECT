const router = require("express").Router();
const { userControllers } = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");
const { uploadUser } = require("../middleware/multer");

router.get("/", userControllers.getAllUser);
router.post("/check/username", userControllers.usernameCheck);
router.post("/check/phone", userControllers.phoneCheck);
router.get("/one-user", verifyToken, userControllers.getOneUser);
router.put("/update", verifyToken, uploadUser, userControllers.editUserData);
router.put("/change-password", verifyToken, userControllers.changePassword);
router.put("/change-sosmed", verifyToken, userControllers.editLinkSosmed);

module.exports = router;
