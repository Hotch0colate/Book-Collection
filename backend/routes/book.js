const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Book = require("../models/Book_db.js");
const verifyToken = require("../token.js");
const app = express();
const cors = require("cors");

app.use(cors());

//all-series
router.get("/all-series", (req, res, next) => {
    Book.find()
        .then((book) => {
            res.json(book);
        })
        .catch((err) => {
            next(err);
        });
});

// all book in series
router.get("/book-series", verifyToken, (req, res, next) => {
    var bookseries = req.query.book_series;
    Book.find({ book_series: bookseries })
        .then((book) => {
            res.json(book);
        })
        .catch((err) => {
            next(err);
        });
});


//many series
router.get("/how-many-series", (req, res, next) => {
    Book.distinct("book_series")
        .then((series) => {
            const seriesCount = series.length;
            res.json({ seriesCount });
        })
        .catch((err) => {
            next(err);
        });
});

//update volmax here
// update series
router.put("/admin/update/:id", verifyToken, (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((book) => {
            res.json(book);
        })
        .catch((err) => {
            next(err);
        });
});

// create for add new series in book schema
router.post("/admin/create", verifyToken, (req, res, next) => {
    const book_series = req.body.book_series;
    Book.findOne({ book_series: book_series }).then((book) => {
        if (book) {
            return res.status(400).json({ book_series: "Series already exists" });
        } else {
            Book.create(req.body)
                .then((book) => {
                    res.json(book);
                })
                .catch((err) => {
                    next(err);
                });
        }
    });
});

// delete series
router.delete("/admin/delete", verifyToken, (req, res, next) => {
    const { book_series } = req.query
    Book.deleteOne({ book_series: book_series })
        .then((book) => {
            res.json(book);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;