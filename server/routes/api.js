// import { Router } from 'express';
const express = require("express");
const apiRouter = express.Router();
const pantryRoutes = require('./pantryRoutes.js');
// const shoppingRoutes = require('./shoppingRoutes.js');
const shopping = require('./shoppingRoutes.js');

// const apiRouter = Router();
// joins pantryRoutes and shoppingRoutes
apiRouter.use('/pantry', pantryRoutes);

// router.use('/shopping', shoppingRoutes);

// module.exports = router;
// apiRouter.use('/pantry', require('pantryRoutes.js'));

apiRouter.use('/shopping', shopping);

module.exports = apiRouter;
