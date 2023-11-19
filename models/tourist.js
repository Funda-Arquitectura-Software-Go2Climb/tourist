'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Tourist extends Model {}

    Tourist.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {  
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {  
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {  
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'touristdb',
        tableName: 'tourist', 
        timestamps: false
    });

    return Tourist;
}
