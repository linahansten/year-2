
const express = require("express")
const path = require("path")

const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    port: 5432,
    password: process.env.PASSWORD
})

const server = express()
db.connect().then(() => console.log("connected")).catch(err => console.log(err))

server.get('/products', async (req, res) => {
    const sql = await db.query("SELECT * FROM products")
    res.json(sql.rows)
})

server.post('/products', async (req, res) => {
    //undvik denna sql förfrågan
    // const sql = await db.query (`INSERT INTO products (id, name, price, stock) VALUES(${req.body.id},'${req.body.name}', ${req.body.price}, ${req.body.stock})`)
    const sql2 = await db.query('INSERT INTO products (id, name, price, stock) VALUES($1, $2, $3, $4)', [req.body.id, `${req.body.name}`, req.body.price, req.body.stock])
})

server.listen(4000)
//cd server -- node app.js to open da server
// CTRL + C to close da server
//localhost:3000
