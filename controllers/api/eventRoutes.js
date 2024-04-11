const router = require('express').Router();
const { Trip, Event } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res ) => {
    try{
        const newEvent = await Event.create({
            ...req.fields,
        });
        res.status(200).json(newEvent);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
                //TODO: Check the user owns the event
            }
        });

        if (!eventData) {
            res.status(404).json({ message: 'No project found with this id '});
            return;
        }

        res.status(200).json(eventData);

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;