const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zainurrouf4@gmail.com",
    pass: "qmbwgnjoaekdpsmk",
  },
});

module.exports = transporter;
