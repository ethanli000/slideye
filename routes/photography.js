var express = require('express');
var router = express.Router();

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
  res.render('photography', { title: "phpotography", photoProjectList: photoProjectList });
});

module.exports = router;
