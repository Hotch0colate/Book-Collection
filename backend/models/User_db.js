const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    bookcollection: {
        type: Map,
        of: {
            type: Array,
            of: Number,
            default: []
        },
        default: {}
    },
}, { minimize: false });

module.exports = mongoose.model('Users', schema);