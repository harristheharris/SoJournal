const router = require('express').Router();
const { Event, Trip, User } = require('../models');
const withAuth = require('../utils/auth')

//login route???
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

/* router.get('/', async (req, res) => {
    try {
        const tripData = await Trip.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });

        const trips = tripData.map((trip) => trip.get({ plain: true }));

        res.render('homepage', {
            trips,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
}) */

//profile route???
router.get('/', withAuth, async (req, res) => {
    try {
        const sesId = req.session.user_id;
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model: Trip, Event }]
        });

       const userTrips = Trip.findAll({
            where: {
                user_id: sesId
            }

        })


        const trip = userTrips.get({ plain: true })
        const user = userData.get({ plain: true });



        res.render('homepage', {
            trip,
            user,
           
        });
        console.log(trip);
        console.log(user);
    } catch (err) {
        res.status(500).json(err);
    }

})


router.get('/trip/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id, {
            include: [{
                model: User, Event,
                atrributes: ['user_name'],
            }
            ],
        });

        const trip = tripData.get({ plain: true });

        res.render('trip', {
            ...trip,
            logged_in: req.session.logged_in
        });

        console.log(trip);

    } catch (err) {
        res.status(500).json(err);

    }
})






module.exports = router; 
