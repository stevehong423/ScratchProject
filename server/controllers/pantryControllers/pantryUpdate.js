const db = require('../../db.js');

const pantryUpdate = async (req, res, next) => {
     // destructuring from request
     let {
        item_name,
        note: newNote,
        unit: newUnit,
        qty: newQty,
        category,
        par: newPar,
    } = req.body;
    let id = req.params.id;

    try {
        // update db
        let updatePantryById = 'UPDATE pantry SET note = $1, unit = $2, qty = $3, par = $4;';
        let values = [newNote, newUnit, newQty, newPar];
        await db.query(updatePantryById, values);
        // next middleware should be pantryGet
        return next();
    } catch (err) {
        console.log('Error in pantryUpdate middleware :', err);
        return next({
            log: 'pantryController.getPantry: ERROR: Error getting pantry data from database',
            message: {
                err: 'Error occurred in pantryController. Check server logs for more details.',
            }
        });
    }
}

module.exports = pantryUpdate;