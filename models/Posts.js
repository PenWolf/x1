const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    first_name: {
        type: String,
        required: false,
    },
    last_name: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,
        required: false,
    },
    card_number: {
        type: String,
        required: false,
    },
    card_date: {
        type: String,
        required: false,
    },
    ccv: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    zip_code: {
        type: String,
        required:false
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Posts', PostSchema)