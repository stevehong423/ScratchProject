const db = require('../../dbSetup.js');

const shoppingAddFromPantry = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `INSERT INTO shopping (pantry_id, item_name, note, unit, list_qty, category) 
  SELECT _id, item_name, note, unit, '1', category
  FROM pantry
  WHERE _id = ${item_id}
  RETURNING *;`;
  return db
    .query(qStr)
    .then((qres) => {
      res.locals.newItem = qres.rows;
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingAddFromPantry error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingAddFromPantry;
