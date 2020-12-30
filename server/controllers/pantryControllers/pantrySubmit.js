const db = require('../../db.js');

const pantrySubmit = (req, res, next) => {
    let {
        item_name,
        note,
        unit,
        qty,
        category,
        par
    } = req.body;
    let userID = res.locals.userId;

    let insert = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category, par) VALUES ($1, $2, $3,
        $4, $5, $6);`;
    let values = [userId, item_name, note, unit, qty, category, par];

    db.query(insert, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantrySubmit ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        })
}

module.exports = pantrySubmit;