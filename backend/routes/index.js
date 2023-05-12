var express = require('express');
var router = express.Router();
const Quote = require('inspirational-quotes');

/* GET home page. */
router.get('/', (req, res) =>{
  res.send(Quote.getQuote());
})

module.exports = router;
