const db = require('../../dbSetup.js');

const shoppingRefresh = (req, res, next) => {
  console.log('in shoppingRefresh');
  // remove items from shopping that were added by pantry where (list_qty <=)
  // find items in pantry that are low on stock where (par > qty)
  // add items to shopping (list_qty = par - qty, pantry_id = pantry._id)
  let qStr = `DELETE FROM shopping WHERE list_qty <= 0;`;
  db.query(qStr)
    .then((qres) => {
      console.log(
        'file: shoppingRefresh.js ~ line 11 ~ .then ~ qres.rows',
        qres.rows,
      );
      qStr = `SELECT * FROM pantry WHERE par > qty;`;
      db.query(qStr);
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
        // find out if item from pantry is already in shopping
        // if so, update list_qty to be max(list_qty, par-qty)
        // if not insert into shopping
        qStr = `SELECT * FROM shopping WHERE pantry_id = ${newItem._id};`;
        db.query(qStr)
          .then((qres) => {
            pantryItem = qres.rows[0];
            console.log(
              'file: shoppingRefresh.js ~ line 34 ~ importList.map ~ pantryItem',
              pantryItem,
            );
            return pantryItem;
          })
          .then((pantryItem) => {
            if (pantryItem.length === 0) {
              qStr = `INSERT INTO shopping (pantry_id, item_name, note, unit, list_qty, category) 
        VALUES ('${newItem._id}', '${newItem.item_name}', '${newItem.note}', '${
                newItem.unit
              }', 
          '${newItem.par - newItem.qty}', '${newItem.category}');`;
              db.query(qStr);
            } else {
              const qStr = `UPDATE shopping 
        SET (list_qty) = (${Math.max(
          pantryItem.list_qty,
          newItem.par - newItem.qty,
        )}) 
        WHERE pantry_id = ${newItem._id};`;
              db.query(qStr);
            }
          });
        return next();
      });
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingRefresh error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingRefresh;
