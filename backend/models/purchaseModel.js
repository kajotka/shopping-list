const mongoose = require('mongoose');


const modelZakupu = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'category': {
        type: String,
        required: true
    },
    'price': {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Purchase', modelZakupu);