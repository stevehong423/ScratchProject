import { Router } from 'express';
const router = Router();

// joins pantryRoutes and shoppingRoutes
router.use('/pantry', require('pantryRoutes.js'));

router.use('/shopping', require('shoppingRoutes.js'));

module.export = router;