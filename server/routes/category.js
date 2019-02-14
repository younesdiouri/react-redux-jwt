const express = require('express');
const Category = require('../models/category');

const router = express.Router(); //instancier le router

/**
 * [GET] categories/
 */
router.get('/', (req, res) => { 
    Category.find(req.query).then(data => res.send(data)); //req.query permet de rajouter des ?title=&year=
});

/**
 * [GET] categories/:name // categories?foo=bar=
 */
router.get('/:name', (req, res) => {
    Category.findOne({
        name: req.params.name
    }).then(
        data => res.send(data)
    ).catch(
        error => res.sendStatus(404)
    );
});

/**
 * [POST] categories/
 */
router.post('/', (req, res) => {

    const product = new Category(req.body);

    product.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => res.sendStatus(204)
    );
});

/**
 * [PUT] categories/:name
 */
router.put('/:name', (req, res) => {
    Category.findOne({name: req.params.name}).then(
        data => Object.assign(data, req.body).save().then(
            data => res.send(data)
        ).catch(
            error => res.sendStatus(400)
        )
    ).catch(
        error => res.sendStatus(404)
    )
});

/**
 * [DELETE] categories/:name
 */
router.delete('/:name', (req, res) => {
    Category.remove({name: req.params.name}).then(
        data => res.sendStatus(204)
    ).catch(
        error => res.sendStatus(404)
    );
});

module.exports = router;

