var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var passport    = require('passport');
var cors        = require('cors')

var app         = express();

// CORS middleware
app.use(cors())

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize())

// Passport config
require('../config/passport')(passport);

// DB config
var db = require('../config/keys').mongoURI;

// DB conect
mongoose
  .connect(db)
  .then(() => console.log('Mongo is conect'))
  .catch((err) => console.log(err));

// Use Routes
var profileController = require('./controllers/profileController');
app.use('/api/profile', profileController);

var userController = require('./controllers/userController');
app.use('/api/user', userController);

var appController = require('./controllers/appController');
app.use('/api/app', appController);

if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
}

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
  console.log(process.env.NODE_ENV);  
});