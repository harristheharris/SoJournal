const router = require('express').Router();
const { Trip } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res ) => {
    try{
        const newTrip = await Trip.create({
            ...req.body,
            user_id: 
        })
    } catch {

    }
})