const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

/**
 * [GET] List all users.
 */
router.get('/', (req, res) => { 
    User.find(req.query).then(data => res.send(data));
});

/**
 * [GET] Get a single User.
 */
router.get('/:username', (req, res) => {
    User.findOne({
        username: req.params.username
    }).then(
        data => res.send(data)
    );
});

/**
 * [PUT] Edit username.
 */
router.put('/:username', (req, res) => {
    User.findOne({username: req.params.username}).then(
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
 * [POST] Create User.
 */
router.post('/', (req, res) => {

    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    user.save().then(
        data => res.status(201).send(data)
    ).catch(
        error => {
            res.sendStatus(204);
            console.log(error);
        }
    );
});

module.exports = router;