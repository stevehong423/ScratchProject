const db = require('../../dbSetup.js');

const shoppingCheckout = (req, res, next) => {
  console.log('in shoppingCheckout');
  // remove items from shopping that were added by pantry where (pantry_id != null)
  // find items in pantry that are low on stock where (par > qty)
  // add items to shopping (list_qty = par - qty, pantry_id = pantry._id)
  let qStr = `SELECT * FROM shopping WHERE buy_qty IS NOT NULL;`;
  db.query(qStr)
    .then((qres) => {
      const boughtList = qres.rows;
      console.log(
        'file: shoppingCheckout.js ~ line 12 ~ .then ~ boughtList',
        boughtList,
      );
      boughtList.forEach((item) => {
        console.log(
          'file: shoppingCheckout.js ~ line 20 ~ boughtList.forEach ~ item',
          item,
        );
        console.log(
          'file: shoppingCheckout.js ~ line 23 ~ boughtList.forEach ~ item.pantry_id',
          item.pantry_id,
        );
        if (item.pantry_id) {
          qStr = `SELECT * FROM pantry WHERE _id = ${item.pantry_id};`;
          db.query(qStr)
            .then((qres) => {
              let pantryItem = qres.rows[0];
              console.log(
                'file: shoppingCheckout.js ~ line 30 ~ .then ~ pantryItem',
                pantryItem,
              );
              qStr = `UPDATE pantry 
            SET qty = ${pantryItem.qty + item.buy_qty}
            WHERE _id = ${item.pantry_id};`;
              db.query(qStr);
            })
            .then(() => {
              qStr = `UPDATE shopping 
          SET list_qty = ${Math.min(0, item.list_qty - item.buy_qty)} 
          WHERE _id = ${item._id};`;
              db.query(qStr);
            });
        } else {
          console.log('in else...');
          qStr = `INSERT INTO pantry (item_name, note, unit, qty, category) VALUES ('${item.item_name}', '${item.note}', '${item.unit}', '${item.buy_qty}', '${item.category}');`;
          db.query(qStr);
          qStr = `UPDATE shopping 
          SET list_qty = list_qty - ${item.buy_qty} 
          WHERE _id = ${item._id};`;
          db.query(qStr);
        }
      });
    })
    .then(() => {
      qStr = `DELETE FROM shopping WHERE list_qty = 0;`;
      db.query(qStr);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingCheckout error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingCheckout;
