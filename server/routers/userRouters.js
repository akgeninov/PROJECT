const router = require("express").Router();
const { userControllers } = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");
const { uploadUser } = require("../middleware/multer");

router.get("/", userControllers.getAllUser);
router.get("/one-user", verifyToken, userControllers.getOneUser);
router.put("/update", verifyToken, uploadUser, userControllers.editUserData);

module.exports = router;
