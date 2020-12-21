// pantry submit middleware
// input: an object
// output: entire pantry table, updated with the new item submitted

// get database here
const db = require('../../db.js');

const pantrySubmit = async (req, res, next) => {
    // destructuring from request
    let {
        item_name,
        note,
        unit,
        qty,
        category,
        par
    } = req.body;

    try {
        // check to see if item submitted already exists in db
        let getPantryByName = 'SELECT * FROM pantry where item_name = $1;';
        let values = [item_name];

        let { rows } = db.query(getPantryByName, values);
        // if data is empty, meaning that the item isn't in the table yet, then insert new item into table
        if (!rows[0]) {
            let insert = 'INSERT INTO public.pantry (item_name, note, unit, qty, category, par) VALUES ($1, $2, $3, $4, $5, $6);';
            let values = [item_name, note, unit, qty, category, par];
            await db.query(insert, values);
            // next should go to pantryGet middleware
            return next();
        } else {
            // if data is not empty, meaning the item already exists, return an error
            return next({
                log: 'pantryController.pantrySubmit: ERROR: Error item already exists in pantry',
                message: {
                    err: 'Error occurred in pantryController. Check server logs for more details.',
                }
            })
        }
    } catch (err) {
        console.log('Error in pantrySubmit middleware :', err);
        return next({
            log: 'pantryController.pantrySubmit: ERROR: Error getting pantry data from database',
            message: {
                err: 'Error occurred in pantryController. Check server logs for more details.',
            }
        });
    }
}

module.exports = pantrySubmit;