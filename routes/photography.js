var express = require('express');
var router = express.Router();

var menuItem = "photography";

/* GET users listing. */
router.get('/', function(req, res) {
  var photoProjectList = new Array();
//var a;

// a  = (function factorial(n) {
//     return (n <= 1)
//     ? 1
//     : factorial(n - 1) * n;
// })(10);


  photoProjectList[0] = (function(id,name){
    var photoProject = new Array();
    photoProject["pid"] = id;
    photoProject["title"] = name;
    return photoProject;
  })(1,"exotic tokyo");

  photoProjectList[1] = (function(id,name){
    var photoProject = new Array();
    photoProject["pid"] = id;
    photoProject["title"] = name;
    return photoProject;
  })(2,"hello, kamakura");

  //TODO: how to make a main render for global parameters? like title/menu/...
  var renderParameters = { menuItem: menuItem, photoProjectList: photoProjectList };
  res.render('photography', renderParameters);
});

module.exports = router;
