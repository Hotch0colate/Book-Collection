const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    request_description: String,
    url_ref: String,
    request_updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Request', RequestSchema);