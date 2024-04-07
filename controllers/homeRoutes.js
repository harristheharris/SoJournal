const router = require('express').Router();
const { Event, Trip, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const events = eventData.map((event) => event.get({ plain: true }));

        res.render('homepage', {
            events,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/event/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
            include: [{
                model: User,
                atrributes: ['name'],
            },
            ],
        });

        const event = eventData.get({ plain: true});

        res.render('project' , {
            ...event,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);

    }
})

//profile route???
//login route???



