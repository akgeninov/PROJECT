

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
      return res.status(200).json({ message: `${column} pada tabel ${Model.name} tersedia.`, result: true });
    }
  } catch (error) {
    console.error('Error executing query: ' + error);
    return res.status(401).json({ message: 'Gagal ! ' });
  }
};

//untuk testing thoriq
const viewRatingRegist = `
  CREATE VIEW IF NOT EXISTS view_rating_regist AS
  SELECT 
    kelas_bisnis.id AS kelas_bisnis_id,
    kelas_bisnis.nama AS nama_bisnis, 
    CAST(COALESCE(SUM(kelas_rating.nilai) / COUNT(DISTINCT kelas_rating.id_user),0)AS DECIMAL(9,1)) AS rating,
    COUNT(DISTINCT kelas_rating.id_user) AS jumlah_penilai,
    (SELECT COUNT(*) FROM kelas_regist WHERE kelas_regist.id_user = kelas_bisnis.id) AS jumlah_pendaftar
  FROM kelas_bisnis
  LEFT JOIN kelas_rating ON kelas_rating.id_kelas_bisnis = kelas_bisnis.id 
  GROUP BY kelas_bisnis.id
`;

module.exports = {
  checkAvailableColumn,
  viewRatingRegist
};