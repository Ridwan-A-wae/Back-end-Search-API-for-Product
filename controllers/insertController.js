const Product = require('../models/products');

module.exports = async (req, res) => {
  try {
    const { name, price, code } = req.body;
    const image = req.file ? req.file.filename : '';

    if (!name || !price || !image || !code) {
      res.status(400).json({
        error: 'กรุณากรอกข้อมูลทั้งหมด'
      });
      return;
    }

    const data = {
      name,
      price,
      image,
      code
    };

    await Product.create(data);
    res.json({
      data: 'บันทึกข้อมูลเรียบร้อย'
    });
  } catch (error) {
    res.status(500).json({
      error: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล'
    });
  }
};
