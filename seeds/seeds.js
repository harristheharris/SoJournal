const sequelize = require('../config/connection');
const { User, Trip, Event } = require('../models');

const userSeedData = require('./userSeedData.json');
const tripSeedData = require('./tripSeedData.json');
const eventSeedData = require('./eventSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData);
    await Trip.bulkCreate(tripSeedData);
    await Event.bulkCreate(eventSeedData);

    process.exit(0);
}

seedDatabase();