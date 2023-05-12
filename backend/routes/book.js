const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book_db.js');


// ///find all
// router.get('/', (req, res, next) => {
//     Product.find()
//     .then((products) => {res.json(products)})
//     .catch((err) => {res.next(err);})
// })

// ///find by id
// router.get('/:id', (req, res, next) => {
//     Product.findById(req.params.id)
//     .then((products) => {res.json(products)})
//     .catch((err) => {res.next(err);})
// })

// ///add data
// router.post('/', (req, res, next) => {
//     Product.create(req.body)
//     .then((products) => {res.json(products);})
//     .catch((err) => {res.next(err);})
// })

// ///update data by id
// router.put('/:id', (req, res, next) => {
//     Product.findByIdAndUpdate(req.params.id, req.body)
//     .then((products) => {res.json(products);})
//     .catch((err) => {res.next(err);})
// })

// get all book
router.get('/all-book', (req, res, next) => {
    Book.find()
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})

// find book by id
router.get('/id/:id', (req, res, next) => {
    console.log('id');
    Book.findById(req.params.id)
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})

// all book in series
router.get('/bookseries', (req, res, next) => {
    console.log('bookseries');
    var bookseries = req.query.book_series

    Book.find({ book_series: bookseries })
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})

// add new book
router.post('/admin', (req, res, next) => {
    Book.create(req.body)
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})

//show all series
router.get('/all-series', (req, res, next) => {
    Book.distinct('book_series')
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})


// show book from series and volume for update
// series and vol filter
router.get('/onebook', (req, res, next) => {
    console.log('onebook');

    var series = req.query.book_series;
    var vol  = req.query.book_vol;
    var seriesvol = series + ' ' + vol;

    Book.find({ book_name: seriesvol })
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})

// update book
router.put('/admin/:id', (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true } )
      .then((book) => {res.json(book);})
      .catch((err) => {next(err);});
});

// delete book
router.delete('/admin/:id', (req, res, next) => {
    Book.deleteOne({_id: req.params.id })
    .then((book) => {res.json(book);})
    .catch((err) => {next(err);})
})
 
module.exports = router;