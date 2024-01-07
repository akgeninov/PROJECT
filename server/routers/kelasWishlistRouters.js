const router = require("express").Router();
const kelasWishlistController = require("../controllers/kelasWishlistController");

router.get("/myWishlist/:id_user", kelasWishlistController.getWishlistByIdUSer);
router.post("/addToWishlist", kelasWishlistController.addToWishlist);

module.exports = router;
