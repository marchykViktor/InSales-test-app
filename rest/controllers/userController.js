// user controller routes
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const keys = require('../../config/keys');
const passport = require('passport');

const insales = require('../libs/insales')({
  id: process.env.insalesid,
  secret: process.env.insalessecret,
});

// Load user model
const User = require('../models/User');

// @route   GET /api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        User.find().sort([['_id', 'descending']]).limit(1).exec((err, userdata) => {
          if (err) throw err;
          var newUser = new User({
            insalesid: req.body.name,
            insalesurl: '',
            token: '',
            name: '',
            email: req.body.email,
            phone: '',
            domain: '',
            created_at: moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            updated_at: moment().format('ddd, DD MMM YYYY HH:mm:ss ZZ'),
            enabled: true,
            fields: [],
            fileUrl: '',
            password: req.body.password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              newUser.password = hash;
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
  var email = req.body.email,
      password = req.body.password;

  // Find user by email
  User.findOne({ email: email })
    .then(user => {
      // Check user

      if (!user) {
        return res.status(404).json({ email: 'User email not found' });
      };

      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          console.log(isMatch)
          if (isMatch) {
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
            return res.status(400).json({ password: 'Password incorect' });
          }
        });
    });
});

// @route   GET /api/user/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = req.user;
  const access = {
    token: user.token,
    url: user.insalesurl
  };

  async function setUser() {
    try {
      const insalesUserResponse = await insales.getAccount(access);
      const insalesUser = insalesUserResponse.data;

      const userResponse = await User.findOneAndUpdate({ insalesid: req.user.insalesid }, {
        $set:
        {
          name: insalesUser.owner.name,
          domain: insalesUser.main_host,
          email: insalesUser.owner.email,
          phone: insalesUser.phone
        }
      });

      res.json({
        user: {
          domain: userResponse.domain,
          name: userResponse.name,
          email: userResponse.email,
          fileUrl: userResponse.fileUrl,
          fields: userResponse.fields,
          settings: userResponse.settings,
        }
      })

    } catch (err) {
      res.json({ error: err })
    }
  };

  setUser()
});

module.exports = router;