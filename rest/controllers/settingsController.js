// settings controller routes
var express = require('express');
var router = express.Router();

// get /api/settings/
router.get('/',(req,res) => {
  res.send('GET response');
});

// post /api/settings/
router.post('/setCsv',(req,res) => {
  res.send('POST response');
});

// @route   PUT /api/settings/editCsv
// @desc    Edit user CSV link
// @access  Private
router.put('/editCsv',(req,res) => {
  console.log(req.body)
  res.json({ state: 'PUT response' });
});

// delete /api/settings/
router.delete('/',(req,res) => {
  res.send('DELETE response');
});

module.exports = router;