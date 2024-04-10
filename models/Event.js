const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model { }

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            //TODO: Figure this out
            // validate: {    
            // }
        },
        description: {
            type: DataTypes.STRING,
        },
        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'trip',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
)
module.exports = Event;