const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes.js');
const tripRoutes = require('./tripRoutes');


router.use('/users', userRoutes);
router.use('/trips', tripRoutes);
router.use('/event', eventRoutes);

module.exports = router;