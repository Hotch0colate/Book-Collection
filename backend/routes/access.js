const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/User_db');
var jwt = require('jsonwebtoken');
const verifyToken = require('../token')
var revokedTokens = [];
const cors = require('cors');
const app = express();

app.use(cors());

// sign-up
router.post('/sign-up', (req, res, next) => {
    const { username, password } = req.body;
    Users.create({ username, password })
        .then((user) => { res.json(user); })
        .catch((err) => { next(err) })
});


//sign-in
router.post('/sign-in', (req, res, next) => {
    const { username, password } = req.body;
    Users.findOne({ username: username, password: password })
        .then((user) => {
            if (user) {
                const token = jwt.sign({
                    data: { "username": username, "password": password }
                }, 'secret', { expiresIn: 60 * 60 });

                res.json({
                    "token": token,
                    "userId": user._id
                });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        })
        .catch((err) => { next(err) });
});

//sign-out
router.post('/sign-out', verifyToken, (req, res, next) => {
    const { token, userId } = req.query;
    if (revokedTokens.includes(token)) {
        return res.status(401).json({ message: 'Token revoked' });
    }
    revokedTokens.push(token);
    res.status(200).json({ message: 'Sign-out successful' });
});

// change password
router.put('/change/:id', (req, res, next) => {
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => { res.json(user); })
        .catch((err) => { next(err); })
});

// get all user
// router.get('/allusers', (req, res, next) => {
//     Users.find()
//         .then((user) => { res.json(user); })
//         .catch((err) => { next(err); })
// });

module.exports = router;