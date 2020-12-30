const db = require('../../db.js');

const pantryItemDown = (req, res, next) => {
    let id = req.params.id;

    let pantryDown = `UPDATE pantry SET qty = qty - 1 WHERE _id = $1;`;
    let values = [id];

    db.query(pantryDown, values)
        .then(() => {
            return next();
        })
        .catch(() => {
            return next({
                log: 'pantryController.pantryItemDown error',
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryItemDown;