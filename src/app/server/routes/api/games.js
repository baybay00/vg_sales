const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const Game = require('../../models/Game')



router.use(bodyParser.json())

router.get('/results', (req, res) => {
    const query = req.query.query

    Game.findAll({
        where: {

        }
    })
        .then((games) => {
        if(games.length > 0) {
            res.json(games)
        } else {
            res.status(404).json({nogamesfound: 'No results'})
        }
    })
        .catch((err) => {
            console.error('Error fetching games', err)
            res.status(500).json({error: 'Server error'})
        })
})

module.exports = router;