const express = require('express')
const pg = require('pg')
const cors = require('cors')
require('dotenv').config()

const db = new pg.Client({
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST
})
db.connect().then(res => console.log("connected")).catch(err => console.log(err))

const server = express()
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.get('/api/pokemon', async (req, res) => {
    const data = await db.query('SELECT * FROM caught_pokemon')
    res.json(data.rows)
})

server.post('/api/pokemon', async (req, res) => {
    try {
        const { name, base_experience } = req.body;

        // Insert the caught Pokemon into the database
        const result = await db.query(
            'INSERT INTO caught_pokemon (name, base_experience) VALUES ($1, $2) RETURNING *',
            [name, base_experience]
        );
        res.json({ msg: 'Pokemon saved successfully', data: result.rows[0] });
    } catch (error) {
        console.error('Error while saving Pokemon:', error);
        res.status(500).json({ msg: 'Failed to save Pokemon' });
    }
});
server.listen(3000)