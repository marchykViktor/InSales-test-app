// settings controller routes
const express   = require('express');
const router    = express.Router();

const file      = require('../models/File').getFileFirstLine;
const passport  = require('passport');

// @route   POST /api/settings/csv
// @desc    Edit user CSV link
// @access  Private
router.post('/csv', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.user);
  if (req.body.link && 
      req.body.link !== '' && 
      req.user.insalesid > 0) {

    file(req.user, req.body.link, function (response) {
      if (response.error) {
        res.json({ error: error });
      } else {
        res.json(response.data);
      };
    });

  } else {
    res.json({ error: 'Не указана ссылка' });
  };
});

module.exports = router;