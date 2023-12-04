const acces = process.env.ACCESS_KEY;

module.exports = {
  authorize: async (req, res, next) => {
    console.log({ key: req.headers.key });
    console.log({ env: process.env.ACCESS_KEY });
    if (req.headers.key == acces) {
      return next();
    }
    res.status(500).send({ message: "Authorize Failed" });
  },
};
