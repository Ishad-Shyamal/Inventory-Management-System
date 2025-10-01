const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, reqired: true },
    description: { type: String, required: true }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;