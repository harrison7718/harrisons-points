const express = require('express');
const router = express.Router();

// @route   GET api/events
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('create an event');
});

// @route   POST api/events
// @desc    Auth user & get token
// @access  Private
router.post('/', (req, res) => {
  res.send('create an event');
});

// @route   PUT api/events/:id
// @desc    Auth user & get token
// @access  Private
router.post('/:id', (req, res) => {
  res.send('edit an event');
});

// @route   DELETE api/events/:id
// @desc    Auth user & get token
// @access  Private
router.post('/:id', (req, res) => {
  res.send('delete an event');
});

module.exports = router;
