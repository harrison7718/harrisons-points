const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const Template =  require('../models/Template');

// @route   GET api/templates/:templateId
// @desc    Get Event Template
// @access  Public
router.get('/:templateId' , async (req, res) => {
  try {
    const template = await Template.findById(req.params.templateId);
    if (!template){
      return res.status(400).json({ msg: 'No template with given ID exsists' });
    }
    res.json(template);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/templates
// @desc    Add a template to the DB
// @access  Public
router.post('/', async (req, res) => {

  const { title, description, order, unit, points } = req.body;

  try {
    template = new Template({
      title: title,
      description: description,
      order: order,
      unit: unit,
      points: points
    });

    response = await template.save();

    res.status(200).json(response);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
