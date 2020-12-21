const db = require('../../dbSetup.js');

const shoppingRefresh = (req, res, next) => {
  console.log('in shoppingRefresh');
  // remove items from shopping that were added by pantry where (pantry_id != null)
  // find items in pantry that are low on stock where (par > qty)
  // add items to shopping (list_qty = par - qty, pantry_id = pantry._id)
  let qStr = `DELETE FROM shopping WHERE pantry_id IS NOT NULL RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      console.log(
        'file: shoppingRefresh.js ~ line 11 ~ .then ~ qres.rows',
        qres.rows,
      );
      qStr = `SELECT * FROM pantry WHERE par > qty;`;
      return db.query(qStr);
    })
    .then((qres) => {
      const importList = qres.rows;
      console.log(
        'file: shoppingRefresh.js ~ line 16 ~ .then ~ importList',
        importList,
      );
      importList.map((newItem) => {
        console.log(
          'file: shoppingRefresh.js ~ line 25 ~ importList.map ~ newItem',
          newItem,
        );
        qStr = `INSERT INTO shopping (pantry_id, item_name, note, unit, list_qty, category) 
        VALUES ('${newItem._id}', '${newItem.item_name}', '${newItem.note}', '${
          newItem.unit
        }', 
          '${newItem.par - newItem.qty}', '${newItem.category}')
          RETURNING *;`;
        return db.query(qStr);
      });
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingRefresh error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingRefresh;
