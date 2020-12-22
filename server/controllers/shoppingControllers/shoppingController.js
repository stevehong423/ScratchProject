const get = require('./shoppingGet.js');
const submit = require('./shoppingSubmit.js');
const update = require('./shoppingUpdate.js');
const remove = require('./shoppingRemove.js');
const refresh = require('./shoppingRefresh.js');
const checkout = require('./shoppingCheckout.js');
const addFromPantry = require('./shoppingAddFromPantry.js');
module.exports = {
  get,
  submit,
  update,
  remove,
  refresh,
  checkout,
  addFromPantry,
};
