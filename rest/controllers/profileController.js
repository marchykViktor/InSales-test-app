// profile controller routes
var express = require('express');
var router = express.Router();

// get /api/profile/
router.get('/',(req,res) => {
  res.send('GET respwqeqweqonse');
});

// post /api/profile/
router.post('/',(req,res) => {
  res.send('POST response');
});

// put /api/profile/
router.put('/',(req,res) => {
  res.send('PUT response');
});

// delete /api/profile/
router.delete('/',(req,res) => {
  res.send('DELETE response');
});

module.exports = router;