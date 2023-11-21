const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`server is running on port ${process.env.PORT}`);
});
