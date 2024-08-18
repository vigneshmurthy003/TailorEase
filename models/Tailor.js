const mongoose = require('mongoose');

const tailorSchema = new mongoose.Schema({
    name: String,
    location: String,
    specialty: String,
    portfolio: Array, // Array of image URLs
    reviews: Array,   // Array of review objects
});

module.exports = mongoose.model('Tailor', tailorSchema);
