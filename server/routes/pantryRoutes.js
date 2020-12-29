import { Router } from 'express';
const pantry = Router();
import pantryController from ('server/controllers/pantryControllers/pantryController.js');

// output: return entire pantry table as JSON
pantry.get(
    '/',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

// input: js object, contains key-value pairs from pantry table
// output: return entire pantry table as JSON
pantry.post(
    '/submit',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

// input: js object, contains key-value pairs from pantry table
// output: return entire pantry table as JSON 
pantry.put(
    '/update/:id',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.put(
    '/itemup/:id',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.put(
    '/itemdown/:id',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.delete(
    '/delete/:id',
    

    (req, res) => {
        return res.status(200).json({
            pantry: res.locals.pantry,
        });
    }
);

module.exports = pantry;