const db = require('../../db.js');

const pantryUpdate = (req, res, next) => {
    // destructuring from request
    let {
        item_name,
        note: newNote,
        unit: newUnit,
        qty: newQty,
        category: newCategory,
        par: newPar,
    } = req.body;
    let id = req.params.id;

    let update = `UPDATE pantry SET note = $1, unit = $2, qty = $3, category = $4, par = $5 WHERE _id = $6;`;
    let values = [newNote, newUnit, newQty, newCategory, newPar, id];

    db.query(update, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryUpdate ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryUpdate;