const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    user: {type: String, required: true},
    fav_films: [{
        Title: String, 
        Year: Number,
        Plot: String}]

});

const Films = mongoose.model('Film', filmSchema);

module.exports = Films;