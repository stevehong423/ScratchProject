const db = require('../../dbSetup.js');
const bcrypt = require('bcryptjs');

const authSignup = (req, res, next) => {
  // write code here
  // take user info from client

  console.log('in authSignup');
  bcrypt
    .hash(req.body.passkey, 10)
    .then((hash) => {
      const qStr = `INSERT INTO auth (user_name, passkey) VALUES (${req.body.username}, ${hash})
      RETURNING *;`;
      db.query(qStr)
        .then((data) => {
          res.locals.username = req.body.username;
          return next();
        })
        .catch((err) => next(err));
    })
    .catch((bcryptError) => next(bcryptError));
};

Module.exports = authSignup;
