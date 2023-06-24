const Product = require('../models/products');

module.exports = (req, res) => {
    const { q } = req.query;

    const keys = ["name", "code"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
        );
    };

    Product.find({ $or: keys.map((key) => ({ [key]: { $regex: q, $options: 'i' } })) })
        .then((products) => {
            const filteredProducts = q ? search(products).slice(0, 30) : products.slice(0, 30);
            res.json(filteredProducts);
            console.log(filteredProducts);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};
