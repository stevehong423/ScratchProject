const { Router } = require('express');
const authController = require('../controllers/authControllers/authController.js');

const auth = Router();

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
auth.post(
  '/signup',
  authController.authSignup,
  authController.authCookie,
  (req, res) => {
    return res.redirect('/api/');
  },
);

auth.post(
  '/signin',
  authController.authSignin,
  authController.authCookie,
  (req, res) => {
    return res.redirect('/api/');
  },
);
