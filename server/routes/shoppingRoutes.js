const express = require("express");
const shopping = express.Router();
const pantryController = require('../controllers/shoppingControllers/shoppingController.js');

// output: entire shopping table as JSON
shopping.get(
    '/',
    

    (req, res) => {
        return res.status(200).json(res.locals.shopping);
    }
);

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
shopping.post(
    '/submit',
    

    (req, res) => {
        return res.status(200).json(res.locals.shopping,);
    }
);

// input: js object
// output: entire shopping table as JSON
shopping.put(
    '/update/:id',
    

    (req, res) => {
        return res.status(200).json(res.locals.shopping);
    }
);

// input: id of item to delete
// output: entire shopping table as JSON
shopping.delete(
    '/delete/:id',
    

    (req, res) => {
        return res.status(200).json(res.locals.shopping);
    }
);

// input: array of js object that were purchased
// output: entire shopping table as JSON
shopping.post(
    '/checkout',
    

    (req, res) => {
        return res.status(200).json();
    }
);

module.exports = shopping;