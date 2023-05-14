const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/User_db.js');
// const { collection } = require('../models/Book_db.js');


/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('respond with a resource');
});

// create user
router.post('/create-user', (req, res, next) => {
    Users.create(req.body)
        .then((user) => { res.json(user); })
        .catch((err) => { next(err) })
});

// change password
router.put('/change/:id', (req, res, next) => {
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => { res.json(user); })
        .catch((err) => { next(err); })
});

// get all user
router.get('/allusers', (req, res, next) => {
    Users.find()
        .then((user) => { res.json(user); })
        .catch((err) => { next(err); })
});

// addbook to collection user
router.post('/addbook/:id', (req, res, next) => {

    const { book_name, book_series, book_vol } = req.body;
    const newBook = { book_name, book_series, book_vol };

    Users.findById(req.params.id)
        .then((user) => {
            user.collectionbook.push(newBook);
            return user.save();
        })
        .then((col) => { res.json(col); })
        .catch((err) => { next(err); });
});

// show all book in your collection
router.get('/showcol/:id', (req, res, next) => {
    Users.findById(req.params.id)
        .then((user) => { res.json(user.collectionbook) })
        .catch((err) => { next(err); })
});

// show  all series in my collection
router.get('/:userId/collection/series', (req, res, next) => {
    Users.findById(req.params.userId)
        .distinct('collectionbook.book_series')
        .then(series => { res.json(series); })
        .catch(err => { next(err); });
});

// show all vol in series collection
router.get('/:userId/collection/series/:seriesName', (req, res, next) => {
    Users.findById(req.params.userId)
        .then(user => {
            const books = user.collectionbook.filter(book => book.book_series === req.params.seriesName);
            res.json(books);
        })
        .catch(err => { next(err); });
});

// delete some book in your collection
router.delete('/deletecol/:userid/:bookid', (req, res, next) => {
    Users.findByIdAndUpdate(req.params.userid,
        { $pull: { collectionbook: { _id: req.params.bookid } } },
        { new: true })
        .then((col) => { res.json(col); })
        .catch((err) => { next(err); })
});

// delete series
router.delete('/:userId/collection/delseries/:seriesName', (req, res, next) => {
    Users.findByIdAndUpdate(req.params.userId,
        { $pull: { collectionbook: { book_series: req.params.seriesName } } },
        { new: true })
        .then(user => { res.json(user); })
        .catch(err => { next(err); });
        console.log('delete')
});

module.exports = router;