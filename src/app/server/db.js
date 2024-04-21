const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('game', 'root', '12345',{
    host: 'localhost',
    dialect: 'mysql'
})

async function testDBConnection(){
    try{
        await sequelize.authenticate()
        console.log('connection established')
    } catch (e) {
        console.error('connection failed', e)
    }
}

testDBConnection()

module.exports = sequelize