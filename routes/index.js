var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Template' });
});

// //gets the about page
// router.get('/about', function(req, res) {
//   res.render('about', { title: 'About' });
// });

//gets the about page
router.get('/maps', function(req, res) {
  res.render('maps', { title: 'Map Test' });
});

//signup page
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Registration' });
});

//profile page
router.get('/profile', function(req, res) {
  res.render('profile', { title: 'profile' });
});


router.get('/login', function(req, res) {
	var db = req.db;
	var collection = db.get('bcrypt');
	collection.find({},{},function(e, results){
		res.render('login', {
			"userlist" : results
		});
	});
});

router.post('/login', function(req, res) {
  var db = req.db;
  var collection = db.get('bcrypt');

  bcrypt.genSalt(10, null, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, result) {
      collection.find({username: req.body.username}, {}, function(err, results) {
        if(err){
          res.send(err);
        }
        else if(!results[0]) {
          res.send("USERNAME NOT FOUND, PLEASE TRY AGAIN");
        }
        else {          
          bcrypt.compare(req.body.password, results[0].pwHash, function(err, match) {
            if (err) {
              console.log(err);
            }
            else {
              if (match == true) {
                res.send("LOGIN SUCCESSFUL");
              }
              else {
                res.send("PASSWORD INCORRECT, PLEASE TRY AGAIN");
              }
            }
          });
        }
      });
    });
  });

  //res.send(req.body.entry + " " + bcrypt.hashSync(req.body.entry));
});

router.get('/checkpw', function(req, res) {
  var db = req.db;
  var collection = db.get('bcrypt');

  collection.find({id: "testEntry"}, {}, function(e, results) {
    res.send(results);
  });
});

router.post('/signup', function(req, res) {
  var db = req.db;
  var collection = db.get('bcrypt');
  var chosenUsername = req.body.username;
  var hashedpw;

  console.log(req.body.username + " " + req.body.password);

  

  collection.find({username: chosenUsername}, {}, function(err, results) {
    if (err){
      console.log(err);
      res.send(err);
    } else{
      if (!results[0]) {
        bcrypt.genSalt(10, null, function(err, salt){
          bcrypt.hash(req.body.password, salt, function(err, result) {
            hashedpw = result;

            collection.insert({username: chosenUsername, pwHash: hashedpw}, {}, function(e, r) {
              if (e) {
                console.log(e);
                res.send(e);
              }
              else {
                console.log(r);
                res.send("SUCCESS!!");
              }
            });
          });
        });
      }
      else {
        console.log(results[0]);

        res.send("ERROR: Username already exists!  Please choose another.");
      }
    }
  });
});

module.exports = router;
