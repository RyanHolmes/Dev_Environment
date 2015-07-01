//controller for the sign up page
var express = require('express');
var bcrypt = require('bcrypt-nodejs');
var router = express.Router();


router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Registration' });
});


module.exports = router;