// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('../models/User_db.js');


// /* GET users listing. */
// router.get('/', (req, res, next) => {
//     res.send('respond with a resource');
// });
// //create user
// router.post('/create-user', (req, res, next) =>{
//     User.create(req.body)
//     .then((user) => {res.json(user);})
//     .catch((err) => {next(err)})
// })

// //change password
// router.put('/change/:id', (req, res, next) => {
//     User.findByIdAndDelete(req.params.id, req.body, { new: true })
//     .then((user) => {res.json(user);})
//     .catch((err) => {next(err);})
// })

// // addbook to collection user
// router.post('/', (req, res, next) => {
//     var bookname = req.query.book_name;
//     var bookseries = req.query.book_series;
//     var bookvol = req.query.book_vol

//     User.collection.create({ col_book_name: bookname,
//                              col_book_series: bookseries,
//                              col_book_vol: bookvol})
//     .then((col) => {res.json(col);})
//     .catch((err) => {next(err);})
// })

// // show all book in your collection
// router.get('/showcol', (req, res, next) => {
//     User.collection.find()
//     .then((col) => {res.json(col);})
//     .catch((err) => {next(err);})
// })

// // delete some book in your collection
// router.delete('/deletlcol', (req, res, next) => {
//     User.collection.deleteOne({col_book_name: req.params.book_name})
//     .then((col) => {res.json(col);})
//     .catch((err) => {next(err);})
// })
// // delete series
// router.delete('/deletseries', (req, res, next) => {
//     User.collection.deleteOne({col_book_series: req.params.book_series})
//     .then((col) => {res.json(col);})
//     .catch((err) => {next(err);})
// })

// module.exports = router;
