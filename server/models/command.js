const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commandDetailsSchema = new Schema({
    idtracking: String, 
    status: String, 
    products: Array //content of the command
})

module.exports = db.model('Command', commandDetailsSchema);

    