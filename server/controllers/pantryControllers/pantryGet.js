const db = require('../../db.js');

const pantryGet = async (req, res, next) => {
    // SQL command to retrieve table
    let getPantry = 'SELECT * FROM pantry;';

    try {
        let { rows } = await db.query(getPantry);
        res.locals.pantry = rows;
        return next();
    } catch (err) {
        console.log('Error in getPantry middleware :', err);
        return next({
            log: 'pantryController.pantryGet: ERROR: Error getting pantry data from database',
            message: {
                err: 'Error occurred in pantryController. Check server logs for more details.',
            }
        });
    }
}

module.exports = pantryGet;