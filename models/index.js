const User = require('./User');
const Trip = require('./Trip');

User.hasMany(Trip, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Trip.hasMany(Event, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE',
});