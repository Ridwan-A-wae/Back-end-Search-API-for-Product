const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    code: {
        type: String,
        required:true,
        unique: true
    },
    
},
{timestamps: true}
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
