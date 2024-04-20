const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

// Define your model
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

// Sync the model with the database (create the table if it doesn't exist)
Game.sync({ force: true }).then(() => {
    console.log('Game table created');
}).catch(err => {
    console.error('Error creating Game table:', err);
});
