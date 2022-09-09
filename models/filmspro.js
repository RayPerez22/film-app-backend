const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    user: { type: String, required: true },
    fav_films: []
});

const Films = mongoose.model('Film', filmSchema);

module.exports = Films;