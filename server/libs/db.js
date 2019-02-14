const mongoose = require('mongoose');

mongoose.connect(
    `mongodb://mongo`,
{
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PWD, 
    dbName: process.env.MONGODB_DBNAME,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', function () {throw new Error('Connection failed')});
db.on('open', function () {console.log('Connected')});

module.exports = db;