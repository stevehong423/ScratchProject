const db = require('../../db.js');

const pantryDelete = (req, res, next) => {
    let id = req.params.id;

    let deletePantry = `DELETE FROM pantry WHERE id = $1;`;
    let values = [id];

    db.query(deletePantry, id)
        .then(() => {
            return next();
        })
        .catch(() => {
            return next({
                log: 'pantryController.pantryDelete error',
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryDelete;