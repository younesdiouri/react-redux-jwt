const db = require('../libs/db');
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    username: {type: String, required: true, unique: true}, 
    lastname: String, 
    firstname: String, 
    email: String,
    //profileImage: String,
    password: {type: String, required: true},
    products: Array, //cart
    commands: Array //replace to tansactions[] for vitned refactor ? @youyou
});

module.exports = db.model('User', userDetailsSchema);

    