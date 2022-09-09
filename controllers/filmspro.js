const express = require('express');
const router = express.Router();
const Films = require('../models/filmspro.js');

//Index
router.get('/', (req, res) => {
    console.log('profile')
    Films.find({}, (err, foundFilms) => {
        res.json(foundFilms)
    })
});
// New - Will be handled by React application
//delete
// router.delete('/:id', (req, res) => {
//     Films.findByIdAndRemove(req.params.id, (err, deletedFilm) => {
//         res.json(deletedFilm);
//     });
// });

// //update
// router.put('/:id', (req, res) => {
//     Films.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFilm) => {
//         res.json(updatedFilm);
//     });
// });

//create
router.post('/', (req, res) => {
    console.log(req.body)
    Films.create(req.body, (err, createdFilmPro) => {
        res.json(createdFilmPro);
    });
});

router.put('/addfilms', (req, res) => {
    try {
        Films.findByIdAndUpdate(
            req.body.id,
            { $push: { fav_films: req.body.film } }
            , (err, docs) => { console.log(req.body.id, req.body.film) }
            // { new: true }
        )
    } catch (error) {
        console.log(error)
    }

})


// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res) => {
    console.log('profileid')
    Films.findById(req.params.id, (err, foundFilm) => {
        res.json(foundFilm);
    });
});

module.exports = router;