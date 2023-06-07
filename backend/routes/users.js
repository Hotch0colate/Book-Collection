const express = require("express");
const router = express.Router();
const Book = require("../models/Book_db.js");
const mongoose = require("mongoose");
const Users = require("../models/User_db.js");
const verifyToken = require("../token.js");
const jwt = require('jsonwebtoken');
// const { collection } = require('../models/Book_db.js');
const app = express();
const cors = require("cors");

app.use(cors());

// addbook to collection user
router.post("/updatebook", verifyToken, (req, res, next) => {
    const { id, book_series, book_vol } = req.query;
    Users.findById(id)
        .then((user) => {
            const bookCollection = user.bookcollection;
            if (!bookCollection.has(book_series)) {
                bookCollection.set(book_series, []);
            }
            const bookSeries = bookCollection.get(book_series); // list of all volume [1 ,5 ,10]
            if (bookSeries.includes(book_vol)) {
                bookSeries.remove(book_vol);
                if (bookSeries.length === 0) {
                    bookCollection.delete(book_series);
                    user.save();
                    return;
                }
            } else {
                bookSeries.push(book_vol);
            }
            bookCollection.set(book_series, bookSeries);
            user.save();
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
});

// show all book data in your collection
router.get("/all-collection-series", verifyToken, (req, res, next) => {
    const { id } = req.query;
    let bookSeriesHaved = [];
    Users.findById(id)
        .then((user) => {
            const bookCollection = user.bookcollection;
            bookCollection.forEach((val, key) => bookSeriesHaved.push(key));
            console.log(bookCollection);
        })
        .catch((err) => {
            next(err);
        });

    Book.find()
        .then((book) => {
            newbook = book.filter((book) =>
                bookSeriesHaved.includes(book.book_series)
            );
            res.json(newbook);
        })
        .catch((err) => {
            next(err);
        });
});

// show all book data in your collection
router.get("/all-book-vol-collection-series", verifyToken, (req, res, next) => {
    const { id, book_series } = req.query;
    console.log(id);
    let bookSeriesHaved = [];
    Users.findById(id)
        .then((user) => {
            const bookCollection = user.bookcollection;
            if (!bookCollection.has(book_series)) {
                return res.json([]);
            }
            bookSeriesHaved = bookCollection.get(book_series);
            return res.json(bookSeriesHaved);
        })
        .catch((err) => {
            next(err);
        });
});

// router.get("/check-token-expire", (req, res, next) => {
//     const { token } = req.query;
//     if (!token) return res.json(false);
//     jwt.verify(token, 'secret', (err, decoded) => {
//         if (err) {
//             console.log(token);
//             return req.json(false)
//         }
//         return req.json(true)
//     });
// });























// show  all series in my collection
router.get("/:userId/collection/series", verifyToken, (req, res, next) => {
    Users.findById(req.params.userId)
        .distinct("bookcollection.book_series")
        .then((series) => {
            res.json(series);
        })
        .catch((err) => {
            next(err);
        });
});

// show all vol in series collection
router.get("/:userId/collection/series/:seriesName", (req, res, next) => {
    Users.findById(req.params.userId)
        .then((user) => {
            const books = user.bookcollection.filter(
                (book) => book.book_series === req.params.seriesName
            );
            res.json(books);
        })
        .catch((err) => {
            next(err);
        });
});

// delete some book in your collection
router.delete("/deletecol/:userid/:bookid", verifyToken, (req, res, next) => {
    Users.findByIdAndUpdate(
            req.params.userid, { $pull: { bookcollection: { _id: req.params.bookid } } }, { new: true }
        )
        .then((col) => {
            res.json(col);
        })
        .catch((err) => {
            next(err);
        });
});

// delete series
router.delete(
    "/:userId/collection/delseries/:seriesName",
    verifyToken,
    (req, res, next) => {
        Users.findByIdAndUpdate(
                req.params.userId, { $pull: { bookcollection: { book_series: req.params.seriesName } } }, { new: true }
            )
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                next(err);
            });
        console.log("delete");
    }
);

function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

module.exports = router;