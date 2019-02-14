const express = require('express');
const Product = require('../models/product');

const router = express.Router(); //instancier le router

/**
 * [GET] products/
 */
router.get('/', (req, res) => { 
    Product.find(req.query).then(data => res.send(data)); //req.query permet de rajouter des ?title=&year=
});

/**
 * [GET] products/:name // products?foo=bar=
 */
router.get('/:name', (req, res) => {
    Product.findOne({
        name: req.params.name
    }).then(
        data => res.send(data)
    ).catch(
        error => res.sendStatus(404)
    );
});

/**
 * [POST] products/
 */
router.post('/', (req, res) => {

    const product = new Product(req.body);

    product.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => res.sendStatus(204)
    );
});

/**
 * [PUT] products/:name
 */
router.put('/:name', (req, res) => {
    Product.findOne({name: req.params.name}).then(
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
 * [DELETE] products/:name
 */
router.delete('/:name', (req, res) => {
    Product.remove({name: req.params.name}).then(
        data => res.sendStatus(204)
    ).catch(
        error => res.sendStatus(404)
    );
});

module.exports = router;

