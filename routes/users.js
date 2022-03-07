const express = require('express');
const router = express.Router();

// @route   POST api/events
// @desc    create an event
// @access  Public
router.post('/', (req, res) => {
  res.send('create an user');
});

module.exports = router;
