const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Request = require("../models/Request_db.js")
const verifyToken = require("../token.js");
const app = express();
const cors = require("cors");

app.use(cors());

router.post("/create-request", verifyToken, (req, res, next) => {
    Request.create(req.body)
        .then((request) => {
            res.json(request);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/all-request", verifyToken, (req, res, next) => {
    Request.find(request_description)
        .then((request) => {
            res.json(request);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete("/delete-request", verifyToken, (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
        .then((request) => {
            res.json(request);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;