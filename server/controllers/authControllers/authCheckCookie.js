const db = require('../../dbSetup');

const authCheckCookie = (req, res, next) => {
  // write code here
  console.log('req.cookies.ssid: ', req.cookies.ssid);
  let userId = req.cookies.ssid;
  const qStr = `SELECT * FROM auth WHERE _id = ${userId};`;
  db.query(qStr)
    .then((record) => {
      let user = record.rows[0] ? record.rows[0] : false;
      console.log('user: ', user);
      if (!user) {
        console.log('not signed in');
        return res.redirect('/signin');
      }
      res.locals.userId = user._id;
      return next();
    })
    .catch((err) => {
      return next('error in authCheckCookie');
    });
};

module.exports = authCheckCookie;
