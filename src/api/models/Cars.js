const mongoose = require('mongoose');

let CarSchema = new mongoose.Schema({
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    initial_value: { type: Number, required: true },
    description: { type: String, required: true },
    KM: { type: String, required: true },
    Combustivel: { type: String, required: true },
    Carroceria: { type: String, required: true },
    Cambio: { type: String, required: true },
    image_url: { type: String, required: false },
    status: { type: Boolean, required: true },
});

module.exports = mongoose.model('Car', CarSchema);
