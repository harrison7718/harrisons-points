const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const User =  require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', 
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a vaild email').isEmail(),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
  ] , async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    } 

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email })

      if(user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        username: username,
        email: email,
        password: password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
          expiresIn: 36000
        },(err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

    } catch (err) {
      console.log('***** ERROR FOUND ******');
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/users
// @desc    Update a users information
// @access  Pivate
router.put('/', [
    auth, 
    check('email', 'Please include a vaild email').isEmail()
  ], async (req, res) => {
    const { username, email } = req.body;

    const userFeilds = {};
    if (username) userFeilds.username = username;
    if (email) userFeilds.email = email;

    try {
      let user = await User.findById(req.user.id);

      if (!user) return res.status(404).json({msg: 'User not found'})

      user = await User.findByIdAndUpdate(
        req.user.id,
        {$set: userFeilds},
        {new: true}
      );

      res.json(user);
    } catch (err) {
      console.log('***** ERROR FOUND ******');
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
