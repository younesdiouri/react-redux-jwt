const express = require('express');
const createToken = require('../libs/auth').createToken;
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/login_check', (req, res) => {

    User.findOne({ username: req.body.username })
    .then(data => {
        if ( bcrypt.compareSync(req.body.password, data.password) ) {
            const token = createToken({
                username: data.username
            })
    
            res.send( {
                token
            });
        } else {
            res.status(400).send({
                error: "Invalid username/password"
            })
        }
    }).catch(
        error => res.sendStatus(500)
    );
})

module.exports = router;