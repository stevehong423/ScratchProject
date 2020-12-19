const db = require('../../dbSetup.js');

const shoppingSubmit = (req, res, next) => {
  console.log('in shoppingSubmit');
  const newItem = req.body.newItem;
  const qStr = `INSERT INTO public.shopping (item_name, note, unit, list_qty, category) VALUES (${newItem.item_name}, ${newItem.note}, ${newItem.unit}, ${newItem.list_qty}, ${newItem.category})
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.newItem = qres.rows;
      console.log('in middleware, ', res.locals.newItem);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingSubmit error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingSubmit;
