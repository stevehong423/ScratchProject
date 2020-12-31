const { Router } = require('express');
const authController = require('../controllers/authControllers/authController.js');

const authRouter = Router();

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
authRouter.post(
  '/signup',
  authController.authSignup,
  authController.authCookie,
  (req, res) => {
    return res.redirect('/api/');
  },
);

authRouter.post(
  '/signin',
  authController.authSignin,
  authController.authCookie,
  (req, res) => {
    return res.redirect('/api/');
  },
);

module.exports = authRouter;
