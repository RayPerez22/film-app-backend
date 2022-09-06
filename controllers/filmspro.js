const express = require('express');
const router = express.Router();
const Films = require('../models/filmspro.js');

//Index
router.get('/', (req, res)=>{
    Films.find({}, (err, foundFilms) => {
        res.json(foundFilms)
    })
});
// New - Will be handled by React application
//delete
router.delete('/:id', (req, res)=>{
    Films.findByIdAndRemove(req.params.id, (err, deletedFilm)=>{
        res.json(deletedFilm);
    });
});

//update
router.put('/:id', (req, res) => {
    Films.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFilm) => {
        res.json(updatedFilm);
    });
});

//create
router.post('/', (req, res) => {
    Films.create(req.body, (err, createdFilm) => {
        res.json(createdFilm); //.json() will send proper headers in response so client knows it's json coming back
    });
});

// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Films.findById(req.params.id, (err, foundFilm)=>{
        res.json(foundFilm);
    });
});

module.exports = router;