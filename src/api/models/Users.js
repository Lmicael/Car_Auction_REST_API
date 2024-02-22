const mongoose = require('mongoose');

let PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birth_date: { type: String, required: true },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    document_number: { type: String, required: true },
});

module.exports = mongoose.model('People', PeopleSchema);