const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    request_book: String,
    request_url: String,
    request_updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Request', RequestSchema);