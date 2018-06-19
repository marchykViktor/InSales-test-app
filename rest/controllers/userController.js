// user controller routes
var express   = require('express');
var router    = express.Router();

var bcrypt    = require('bcryptjs');
var jwt       = require('jsonwebtoken');
var moment    = require('moment');
var keys      = require('../../config/keys');
var passport  = require('passport');

// Load user model
var User = require('../models/User');

// @route   GET /api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne( {email: req.body.email} )
    .then(user => {
      if(user){
        return res.status(400).json({email: 'Email already exists'});
      } else {
        User.find().sort([['_id', 'descending']]).limit(1).exec((err, userdata) => {
          if (err) throw err;
          var newUser = new User({
            insalesid  : req.body.name,
            insalesurl : '',
            token      : req.body.password,
            name       : '',
            email      : req.body.email,
            phone      : '',
            domain     : '',
            created_at : moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            updated_at : moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            enabled    : true,
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.token, salt, (err, hash) => {
              newUser.token = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        });
      }
    });
});

// @route   GET /api/user/login
// @desc    Login user / Returning JWT
// @access  Public
router.post('/login', (req, res) => {
  var email     = req.body.email,
      password  = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then(user => {
      // Check user

      if(!user){
        return res.status(404).json({email: 'User email not found'});
      };

      console.log(user)

      console.log(password + '----' + user.token)
      // Check password
      bcrypt.compare(password, user.token)
        .then(isMatch => {
          console.log(isMatch)
          if(isMatch) {
            // User matched
            var payload = { insalesid: user.insalesid, store: user.insalesurl, email: user.email }; // create JWT payload

            jwt.sign(payload,
                     keys.secretOrKey,
                     { expiresIn: 36000 },
                     (err, token) => {
                        res.json({
                          success: true,
                          token: 'Bearer ' + token
                        });
                     }
                    );
          } else {
            return res.status(400).json({password: 'Password incorect'});
          }
        });
    });
});

// @route   GET /api/user/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;