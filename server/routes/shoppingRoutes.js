import { Router } from 'express';
const shopping = Router();
import shoppingController from ('server/controllers/shoppingController/shoppingController.js');

// output: entire shopping table as JSON
shopping.get(
    '/',
    

    (req, res) => {
        return res.status(200).json({
            shopping: res.locals.shopping,
        });
    }
);

// input: js object with key-value pairs from shopping table
// output: entire shopping table as JSON
shopping.post(
    '/submit',
    

    (req, res) => {
        return res.status(200).json({
            shopping: res.locals.shopping,
        });
    }
);

// input: unknown
// output: entire shopping table as JSON
shopping.put(
    '/update/:id',
    

    (req, res) => {
        return res.status(200).json({
            shopping: res.locals.shopping,
        });
    }
);

// input: id of item to delete
// output: entire shopping table as JSON
shopping.delete(
    '/delete/:id',
    

    (req, res) => {
        return res.status(200).json({
            shopping: res.locals.shopping,
        });
    }
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
    }
);

module.exports = shopping;