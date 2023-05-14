const mongoose = require('mongoose');

const collection = new mongoose.Schema({
    book_name: String,
    book_series: String,
    book_vol: String
});

const schema = new mongoose.Schema({
    username: String,
    password: String,
    collectionbook: [collection]
});

module.exports = mongoose.model('Collect', collection);
module.exports = mongoose.model('Users', schema);