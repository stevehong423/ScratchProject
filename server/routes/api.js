// import { Router } from 'express';
const express = require("express");
const router = express.Router();
const pantryRoutes = require('./pantryRoutes.js');
// const shoppingRoutes = require('./shoppingRoutes.js');

// joins pantryRoutes and shoppingRoutes
router.use('/pantry', pantryRoutes);

// router.use('/shopping', shoppingRoutes);

module.exports = router;