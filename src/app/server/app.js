const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const sequelize = require('sequelize')
const cors = require('cors')
const games = require('/routes/api/games')
const {Sequelize} = require("sequelize");

const sqlz = new Sequelize('vg_sales', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})


app.use('/api/games', games)

app.get('/', (req, res) => res.send('hello, world!'))
app.get('/results', (req, res) => res.send('query results'))

async function testDBConnection() {
    try{
        await sqlz.authenticate()
        console.log('connection established')
    } catch (e) {
        console.error('connection failed', e)
    }
}

testDBConnection()
