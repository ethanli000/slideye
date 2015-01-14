var express = require('express');
var router = express.Router();

var menuItem = "selfie";

router.get('/', function (req, res) {
  var renderParameters = { menuItem: menuItem };
  res.render('selfie', renderParameters);
});

module.exports = router;