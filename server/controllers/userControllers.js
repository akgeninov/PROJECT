const db = require("../models");
const user = db.User;

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const result = await user.findAll();

      res.status(200).send({
        message: "succes",
        result,
      });
    } catch (error) {
      res.status(400).send({
        error: error.message,
      });
    }
  },
};
