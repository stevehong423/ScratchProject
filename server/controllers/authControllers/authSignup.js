const { ModuleFilenameHelpers, Module } = require('webpack');
const db = require('../../dbSetup.js');
const bcrypt = require('bcryptjs');

const createUser = (req, res, next) => {
  // write code here
  // take user info from client

  console.log('in createUser');
  bcrypt
    .hash(req.body.passkey, 10)
    .then((hash) => {
      const qStr = ``;
      db.query(qStr) //.create({username: req.body.username, password: hash})
        .then((data) => {
          res.locals.username = req.body.username;
          return next();
        })
        .catch((err) => next(err));
    })
    .catch((bcryptError) => next(bcryptError));
};

Module.exports = createUser;
