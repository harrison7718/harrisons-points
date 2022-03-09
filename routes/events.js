const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const Template =  require('../models/Template');
const User = require('../models/User')
const Event =  require('../models/Event');

// @route   GET api/events
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('create an event');
});

// @route   POST api/events
// @desc    Auth user & get token
// @access  Private
router.post('/', auth, async (req, res) => {
  const { userId, templateId } = req.body;

  try {
    let user = await User.findById(userId);
    let template = await Template.findById(templateId);

    newPts = user.points + template.points;

    const event = new Event({ 
      userId: userId, 
      templateId: templateId 
    });
    event.save();

    user = await User.findByIdAndUpdate(
      req.user.id,
      {$set: { points: newPts }},
      {new: true}
    );
    
    res.json({event: event, user: user});

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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
