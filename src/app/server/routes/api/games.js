const express = require('express');
const router = express.Router();
const { QueryTypes } = require('sequelize');

const sequelize = require('../../db')

// Define middleware to parse JSON bodies
router.use(express.json());

// Define the route handler for fetching game results
router.post('/results', async (req, res) => {
    const {query} = req.body;

    try{
        const results = await sequelize.query(query, {type: QueryTypes.SELECT})
        res.json(results)
    } catch(error){
        console.error('error executing query', error)
        res.status(500).json({error: 'an error occurred while executing query'})
    }
})

module.exports = router;