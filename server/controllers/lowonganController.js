const db = require("../models");


module.exports = {
  getAllDepartemen: async (req, res) => {
      res.status(200).send({
        message: "succes",
        data: "result",
      });
    
  },

};