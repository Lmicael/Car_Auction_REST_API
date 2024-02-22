const mongoose = require('mongoose');

let ThrowSchema = new mongoose.Schema({
    user: { type: String, required: true },
    document_number: { type: String, required: true },
    value: { type: Number, required: true },
    car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
});

module.exports = mongoose.model('Throw', ThrowSchema);
