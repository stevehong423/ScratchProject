const db = require('../../dbSetup.js');

const shoppingUpdate = (req, res, next) => {
  const item_id = req.params.id;
  console.log(
    'file: shoppingUpdate.js ~ line 5 ~ shoppingUpdate ~ item_id',
    item_id,
  );
  const item = req.body.itemDetails;
  console.log('file: shoppingUpdate.js ~ line 7 ~ shoppingUpdate ~ item', item);
  const qStr = `UPDATE shopping 
  SET (item_name, note, unit, list_qty, category) = (${item.item_name}, ${item.note}, ${item.unit}, ${item.list_qty}, ${item.category}) 
  WHERE _id = ${item_id}
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.updatedItem = qres.rows;
      console.log(
        'file: shoppingUpdate.js ~ line 15 ~ .then ~ res.locals.updatedItem',
        res.locals.updatedItem,
      );
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
