const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    /*user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },*/
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    devise: {
        type: String,
        required: false
    },
    pricePerNight: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: Buffer,
    },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;