const db = require('../../db.js');

const pantryGet = (req, res, next) => {
    let getPantry = 'SELECT * FROM pantry WHERE user_id = $1;';
    // get userid from the cookies
    let values = [res.locals.userID];

    db.query(getPantry, values)
        .then((result) => {
            res.locals.pantry = result.rows;
            // console.log(res.locals.pantry);
            return next();
        })
        .catch(() => {
            return next({
                log: 'pantryController.pantryGet error',
                message: {
                    err: 'SQL query failed'
                },
            });
        });
}

module.exports = pantryGet;