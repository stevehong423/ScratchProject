// pantry update item qty up middleware
// middleware to delete item in pantry table
// input: id params
// output: delete item in table

// get database here
const db = require('../../db.js');

const pantryDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        let deletePantryById = 'DELETE FROM pantry WHERE id = $1;';
        let values = [id];
        await db.query(deletePantryById, values);
        // next middleware should be getPantry
        return next();
    } catch (err) {
        console.log('Error in pantryDelete middleware :', err);
        return next({
            log: 'pantryController.pantryDelete: ERROR: Error deleting pantry data from database',
            message: {
                err: 'Error occurred in pantryController. Check server logs for more details.',
            }
        });
    }
}

module.exports = pantryDelete;