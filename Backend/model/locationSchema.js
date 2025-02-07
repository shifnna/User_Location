const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    username: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', locationSchema);
