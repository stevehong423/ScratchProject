const db = require('../../db.js');

const pantryItemUp = (req, res, next) => {
    let id = req.params.id;

    let pantryUp = `UPDATE pantry SET qty = qty + 1 WHERE _id = $1;`;
    let values = [id];

    db.query(pantryUp, values)
        .then(() => {
            return next();
        })
        .catch(() => {
            return next({
                log: 'pantryController.pantryItemUp error',
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryItemUp;