const multer = require("multer");
const path = require("path");

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    const filePath = path.join(__dirname, "../images/user");
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const fileName =
      path.parse(file.originalname).name +
      "" +
      Date.now() +
      path.extname(file.originalname);

    cb(null, fileName);
  },
});

const uploadUser = multer({
  storage: storageUser,
}).single("file");

module.exports = {
  uploadUser,
};
