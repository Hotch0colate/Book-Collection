const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    book_series: String,
    book_desc: [],
    book_max_vol: String,
    book_img_path: String,
    book_title: String
})

module.exports = mongoose.model('Book', BookSchema);