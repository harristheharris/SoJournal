const router = require('express').Router();
const { Sequelize } = require('sequelize');
const { Event, Trip, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const tripData = await Trip.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const trips = tripData.map((trip) => trip.get({ plain: true }));

        res.render('homepage', {
            trips,
            logged_in: req.session.user_id,
            user_id: req.session.user_id,
        });

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Trip }]
        });
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: req.session.user_id,
            is_user: user.id === req.session.user_id,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/trip/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id, {
            include: [
                {
                    model: Event,
                    atrributes: ['name'],
                },

            ],
        });
        const trip = tripData.get({ plain: true });

        res.render('trip', {
            ...trip,
            logged_in: req.session.user_id,
            is_owner: trip.user_id === req.session.user_id,
        });

    } catch (err) {
        res.status(500).json(err);

    }
})

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

module.exports = router; 
