'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class kelas_transaksi extends Model {
    static associate(models) {
      // define association here
    }
  }

  kelas_transaksi.init({
    id_user: DataTypes.INTEGER,
    id_kelas_bisnis: DataTypes.INTEGER,
    status_transaksi: {
      type: DataTypes.ENUM('success', 'canceled', 'pending'),
      allowNull: false,
    },
    nomor_invoice: {
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('UUID()'), // Menggunakan ekspresi SQL untuk UUID versi 4 secara otomatis
    },
    date_transaksi: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'kelas_transaksi',
  });

  return kelas_transaksi;
};

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class kelas_transaksi extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   const STATUS_TRANSAKSI = ['success', 'canceled', 'pending'];
//   kelas_transaksi.init({
//     id_user: DataTypes.INTEGER,
//     id_kelas_bisnis: DataTypes.INTEGER,
//     status_transaksi: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isIn: {
//           args: [STATUS_TRANSAKSI],
//           msg: 'Invalid status_transaksi value',
//         },
//       },
//     },
//     nomor_invoice: DataTypes.UUID,
//     date_transaksi: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'kelas_transaksi',
//   });
//   return kelas_transaksi;
// };
