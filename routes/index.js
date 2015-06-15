var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Template' });
});

//gets the about page
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

//gets the about page
router.get('/maps', function(req, res) {
  res.render('maps', { title: 'Map Test' });
});

//gets the about page
router.get('/calendar', function(req, res) {
  res.render('calendar', { title: 'Calendar Test' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('bcrypt');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

router.get('/login', function(req, res) {
	var db = req.db;
	var collection = db.get('bcrypt');
	console.log(collection);
	collection.find({},{},function(e, results){
		res.render('login', {
			"userlist" : results
		});
	});
});

module.exports = router;
