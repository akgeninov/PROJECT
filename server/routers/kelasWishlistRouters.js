const router = require("express").Router();
const kelasWishlistController = require("../controllers/kelasWishlistController");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/myWishlist", verifyToken, kelasWishlistController.getWishlistByIdUSer);
router.post("/addToWishlist", kelasWishlistController.addToWishlist);

module.exports = router;
