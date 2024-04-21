const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('game', 'root', '12345',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize