const jwt = require('jsonwebtoken');
require('dotenv').config();

const makeJWT = (data) => {
    const payload = {
        id: data.id,
        nama_user: data.nama_user,
        no_hp: data.no_hp,
        email: data.email,
        nama_bisnis: data.nama_bisnis,
        role_id: data.role_id,
    };
    const result = jwt.sign(payload, process.env.SECRET_JWT, {
        algorithm: "HS256",
        expiresIn: "30d",
        issuer: "Growlab",
    });
    return result;
}

const checkAvailableColumn = async (Model, column, value, res) => {
  try {
    const condition = {
      [column]: value,
    };

    const result = await Model.findOne({
      where: condition,
    });

    if (result) {
      return res.status(500).json({ message: `${column} pada tabel ${Model.name} sudah digunakan.`, result: false });
      
    } else {
      return true;
    }
  } catch (error) {
    console.error('Error executing query: ' + error);
    return res.status(401).json({ message: `Gagal Cek ${column} ! ` });
  }
};

module.exports = {
  makeJWT,
  checkAvailableColumn,
};