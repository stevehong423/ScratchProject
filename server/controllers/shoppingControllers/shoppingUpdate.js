const db = require('../../dbSetup.js');

const shoppingUpdate = (req, res, next) => {
  const item_id = req.params.id;
  const item = req.body.itemDetails;
  const qStr = `UPDATE shopping 
  SET (item_name, note, unit, list_qty, category) = (${item.item_name}, ${item.note}, ${item.unit}, ${item.list_qty}, ${item.category}) 
  WHERE _id = ${item_id}
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.updatedItem = qres.rows;
      console.log('in middleware, ', res.locals.updatedItem);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingUpdate error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingUpdate;
