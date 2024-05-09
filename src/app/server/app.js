const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const {Sequelize} = require('sequelize')
const cors = require('cors')
const games = require('./routes/api/games')



app.use(cors())
app.use('/api/games', games)

console.log(process.env.PORT)
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})