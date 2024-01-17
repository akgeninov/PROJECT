const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const cors = require("cors");
const { join } = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "images")));

app.use(express.urlencoded({ extended: false }));

const { loginRouters } = require("./routers");
const { userRouters } = require("./routers");
const { artikelRouters } = require("./routers");
const { lowonganRouters } = require("./routers");
const { kelasBisnisRouters } = require("./routers");
const { userKelasRouters } = require("./routers");
const { kelasWishlistRouters } = require("./routers");
const { kelasTransaksiRouters } = require("./routers");
const { authorize } = require("./middleware/validator");

app.use("/api", authorize);
app.use("/api/auth", loginRouters);
app.use("/api/user", userRouters);
app.use("/api/userKelas", userKelasRouters);
app.use("/api/artikel", artikelRouters);
app.use("/api/lowongan", lowonganRouters);
app.use("/api/kelasBisnis", kelasBisnisRouters);
app.use("/api/kelasWishlist", kelasWishlistRouters);
app.use("/api/kelasTransaksi", kelasTransaksiRouters);

app.use("/images", express.static("images"));

app.listen(process.env.PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`server is running on port ${process.env.PORT}`);
});
