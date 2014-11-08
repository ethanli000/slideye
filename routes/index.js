var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var renderParameters = { menuItem: 'SLIDEYE' };
  res.render('index', renderParameters);
});

module.exports = router;
