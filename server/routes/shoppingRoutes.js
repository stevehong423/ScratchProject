const { Router } = require('express');
const shoppingController = require('../controllers/shoppingControllers/shoppingController.js');

const shopping = Router();

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
shopping.post(
  '/submit',
  shoppingController.submit,
  shoppingController.get,
  (req, res) => {
    return res.status(200).json({
      shopping: res.locals.shopping,
    });
  },
);

// input: unknown
// output: entire shopping table as JSON
shopping.put(
  '/update/:id',
  shoppingController.update,
  shoppingController.get,
  (req, res) => {
    return res.status(200).json({
      shopping: res.locals.shopping,
    });
  },
);

// input: id of item to delete
// output: entire shopping table as JSON
shopping.delete(
  '/delete/:id',
  shoppingController.remove,
  shoppingController.get,
  (req, res) => {
    return res.status(200).json({
      shopping: res.locals.shopping,
    });
  },
);

// input: array of js object that were purchased
// output: entire shopping table as JSON
shopping.post(
  '/checkout',

  (req, res) => {
    return res.status(200).json({
      shopping: res.locals.shopping,
      pantry: res.locals.pantry,
    });
  },
);

shopping.get(
  '/refresh',
  shoppingController.refresh,
  shoppingController.get,
  (req, res) => {
    return res.status(200).json({
      shopping: res.locals.shopping,
    });
  },
);

// output: entire shopping table as JSON
shopping.get('/', shoppingController.get, (req, res) => {
  return res.status(200).json({
    shopping: res.locals.shopping,
  });
});

module.exports = shopping;
