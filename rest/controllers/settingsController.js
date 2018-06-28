// settings controller routes
const express = require('express');
const router = express.Router();

const getImportArr = require('../models/File').getImportArr;
const passport = require('passport');

const User = require('../models/User');

// @route   POST /api/settings/csv
// @desc    Edit user CSV link
// @access  Private
router.post('/csv', passport.authenticate('jwt', { session: false }), (req, res) => {
  if (req.body.link &&
    req.body.link !== '' &&
    req.user.insalesid > 0) {

    getImportArr(req.user, req.body.link, function (response) {
      if (response.error) {
        res.json({ error: response.error });
      } else {
        
        User.findOneAndUpdate({insalesid: req.user.insalesid}, {
          $set: { fileUrl: req.body.link }
        }, function(err, res){
          console.log(res)
        });
        
        res.json(response.data);
      };
    });

  } else {
    res.json({ error: 'Не указана ссылка' });
  };
});

// @route   POST /api/settings/csv-settings
// @desc    Edit user CSV settings
// @access  Private
router.post('/csv-settings', passport.authenticate('jwt', { session: false }), (req, res) => {
  if(req.body.file
     && req.body.file.length > 0) {

      User.findOneAndUpdate({insalesid: req.user.insalesid}, {
        $set: { fields: req.body.file }
      }, function(err, response){
        res.json({ data: response.fields })
      });

  } else {
    res.json({ error: 'Настройки отсутствуют' })
  }
});

module.exports = router;