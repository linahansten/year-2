
const express = require("express")
const { Server } = require("http")
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
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static('public'))
db.connect().then(() => console.log("connected")).catch(err => console.log(err))

server.get('/products', async (req, res) => {
    const sql = await db.query("SELECT * FROM products")
    res.json(sql.rows)
})

server.post('/products', async (req, res) => {
    try {
        const sql2 = await db.query('INSERT INTO products (id, name, price, stock) VALUES($1, $2, $3, $4)', [req.body.id, `${req.body.name}`, req.body.price, req.body.stock])
        res.json({ message: 'Product added' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: 'Something went wrong' })
    }
    //undvik denna sql förfrågan
    // const sql = await db.query (`INSERT INTO products (id, name, price, stock) VALUES(${req.body.id},'${req.body.name}', ${req.body.price}, ${req.body.stock})`)
})

server.post('/update', async (req, res) => {
    try {
        await db.query('UPDATE products SET name = $1 WHERE id = $2', [req.body.newName, req.body.id])
        res.json({ message: 'Product updated' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: 'Something went wrong' })
    }
})


//5.7 uppg
server.post('/delete', async (req, res) => {
    try {
        await db.query('DELETE FROM products WHERE id = $1', [req.body.id])
        res.json({ message: 'Product deleted' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: 'Something went wrong' })
    }
})

server.listen(3000)
//cd server -- node app.js to open da server
// CTRL + C to close da server
//localhost:3000
