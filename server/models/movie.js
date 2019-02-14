const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieDetailsSchema = new Schema({
    title: String, 
    year: {type: Number, min: 1850},
    released: Date
})

module.exports = db.model('Movie', movieDetailsSchema);

    