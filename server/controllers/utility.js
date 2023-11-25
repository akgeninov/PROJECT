

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
      }else{
        return res.status(200).json({ message: `${column} pada tabel ${Model.name} tersedia.`, result: true });
      }
    } catch (error) {
      console.error('Error executing query: ' + error);
      return res.status(401).json({ message: 'Gagal ! ' });
    }
};

module.exports = {
    checkAvailableColumn
};