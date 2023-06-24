const Product = require('../models/products');

module.exports = (req, res) => {
    const { code } = req.params;
    console.log(code);
    Product.findOne({ code })
        .then((product) => {
            res.json(product);
        })
        .catch((error) => {
            console.log('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
};
