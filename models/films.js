const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: String,
    plot: String,
    year: Number,
    // poster: String,
});

const Films = mongoose.model('Film', filmSchema);

module.exports = Films;