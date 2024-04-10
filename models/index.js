const User = require('./User');
const Trip = require('./Trip');
const Event = require('./Event');

User.hasMany(Trip, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Trip.belongsTo(User, {
    foreignKey: 'user_id'
})

Trip.hasMany(Event, {
    foreignKey: 'trip_id',
    onDelete: 'CASCADE',
});

module.exports = { User, Trip, Event }