const express = require('express');
const Movie = require('../models/movie');

const router = express.Router(); //instancier le router

router.get('/', (req, res) => { 
    Movie.find(req.query).then(data => res.send(data)); //req.query permet de rajouter des ?title=&year=
});

router.get('/:title', (req, res) => {
    Movie.findOne({
        title: req.params.title
    }).then(
        data => res.send(data)
    );
});

module.exports = router;

