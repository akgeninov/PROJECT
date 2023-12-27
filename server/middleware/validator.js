const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  authorize: async (req, res, next) => {
    console.log({ key: req.headers.key });
    console.log({ env: process.env.ACCESS_KEY });
    const access = process.env.ACCESS_KEY;
    // jwt.verify(req.headers.key, process.env.SECRET_JWT, (err, decoded) => {
    //   if (err) {
    //     if (err.name === 'TokenExpiredError') {
    //       res.status(500).send({ message: "Session Expired" });
    //     } else {
    //       res.status(500).send({ message: "Token tidak valid" });
    //     }
    //   } else {
    //     return next();
    //   }
    // });
    if (req.headers.key == access) {
      return next();
    }
  },
};
