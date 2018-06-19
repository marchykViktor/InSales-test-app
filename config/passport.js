var JwtStrategy   = require('passport-jwt').Strategy;
var ExtractJwt    = require('passport-jwt').ExtractJwt;
var mongoose      = require('mongoose');
var User          = require('../rest/models/User');
var keys          = require('./keys');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(3)
      User.findOne( {email: jwt_payload.email} )
        .then(user => {
          console.log(121212212222)
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};