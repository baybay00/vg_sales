const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Game = sequelize.define('Game', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platform: {
        type: DataTypes.STRING
    },
    releaseYear: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.STRING
    },
    publisher: {
        type: DataTypes.STRING
    },
    naSales: {
        type: DataTypes.FLOAT
    },
    euSales: {
        type: DataTypes.FLOAT
    },
    jpSales: {
        type: DataTypes.FLOAT
    },
    otherSales: {
        type: DataTypes.FLOAT
    },
});

module.exports = Game;