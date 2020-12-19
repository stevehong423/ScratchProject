const db = require('../../dbSetup.js');

const shoppingGet = (req, res, next) => {
  console.log('in shoppingGet');
  const qStr = `SELECT * FROM shopping;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.shopping = qres.rows;
      console.log('in middleware, ', res.locals.shopping);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingGet error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingGet;
