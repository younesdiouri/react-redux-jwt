const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productDetailsSchema = new Schema({
    name: String, 
    price: {type: Number, min: 0},
    description: String,
    rating: {type: Number, min: 0, max: 5},
    quantitiy: {type: Number, min: 0},
    available: Boolean, 
    category: String,
    comments: Array
})

module.exports = db.model('Product', productDetailsSchema);

    