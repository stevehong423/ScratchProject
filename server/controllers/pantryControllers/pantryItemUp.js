// pantry update item qty up middleware
// input: id params
// output: qty up in table

// get database here
const db = require('../../db.js');

const pantryItemUp = (req, res, next) => {
    let id = req.params.id;

    try {
        // update item qty in db
        let updatePantryById = 'UPDATE pantry SET qty = qty + 1 WHERE _id = $1;';
        let values = [id];
        await db.query(updatePantryById, values);
        // next middleware should be pantryGet
        return next();
    } catch (err) {
        console.log('Error in pantryItemUp middleware :', err);
        return next({
            log: 'pantryController.getPantry: ERROR: Error getting pantry data from database',
            message: {
                err: 'Error occurred in pantryController. Check server logs for more details.',
            }
        });
    }
}

module.exports = pantryItemUp;