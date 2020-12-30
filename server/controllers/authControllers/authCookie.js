const db = require('../../dbSetup');

const authCookie = (req, res, next) => {
  // write code here
  let userId;
  const qStr = `SELECT * FROM auth WHERE user_name = ${req.body.username};`;
  db.query(qStr)
    .then((record) => {
      userId = JSON.stringify(record[0]._id).replace(/["']/g, '');
      // console.log(typeof userId);
      res.cookie('ssid', userId, { httpOnly: true });
      res.locals.userId = userId;
      return next();
    })
    .catch((err) => console.log(err));
};

module.exports = authCookie;
