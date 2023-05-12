const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    book_name: String,
    book_series: String,
    book_vol: String,
    book_desc: String,
    book_updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Book', BookSchema);