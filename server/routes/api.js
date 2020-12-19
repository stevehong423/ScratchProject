const express = require('express');
const { Router } = express;
const { shopping } = require('./shoppingRoutes.js');

const apiRouter = Router();
// joins pantryRoutes and shoppingRoutes
//apiRouter.use('/pantry', require('pantryRoutes.js'));

apiRouter.use('/shopping', shopping);

module.exports = apiRouter;
