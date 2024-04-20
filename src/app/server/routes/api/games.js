const express = require('express')
const router = express.Router
var bodyParser = require('body-parser')

const Game = require('../../models/Game')

module.exports = router;

router.get('/', (req, res) => {
    Game.find()
        .then((games) => res.json(games))
        .catch((err) => res.status(404).json({ nogamesfound: 'No Data Found'}))
})