const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const tripRoutes = require('./tripRoutes');


router.use('/users', userRoutes);
router.use('/trips', tripRoutes);
router.use('trips/event', eventRoutes);

module.exports = router;