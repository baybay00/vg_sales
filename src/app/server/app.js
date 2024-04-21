const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const {Sequelize} = require('sequelize')
const cors = require('cors')
const games = require('./routes/api/games')
const {authenticate} = require("@/app/server/db");



app.use(cors())
app.use('/api/games', games)

app.get('/', (req, res) => res.send('hello, world!'))
app.get('/games', (req, res) => res.send('query results'))

async function testDBConnection() {
    try{
        await authenticate()
        console.log('connection established')
    } catch (e) {
        console.error('connection failed', e)
    }
}

testDBConnection()

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})