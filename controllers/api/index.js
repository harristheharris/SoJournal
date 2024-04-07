const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const tripRoutes = require('./tripRoutes');


router.use('/users', userRoutes);
router.use()