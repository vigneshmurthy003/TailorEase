const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tailor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tailor' },
    measurements: Object, // Stores measurements for clothing
    status: String, // Status of the order
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
