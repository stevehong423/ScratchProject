const db = require('../../dbSetup.js');

const shoppingDelete = (req, res, next) => {
  console.log('in shoppingDelete');
  const item_id = req.params.id;
  const qStr = `DELETE FROM shopping 
  WHERE _id = ${item_id}
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.deletedItem = qres.rows;
      console.log('in middleware, ', res.locals.deletedItem);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingDelete error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingDelete;
