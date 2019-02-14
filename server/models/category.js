const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoryDetailsSchema = new Schema({
    name: String
})

module.exports = db.model('Category', categoryDetailsSchema);

    