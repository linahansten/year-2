
const express = require("express")
const { Server } = require("http")
const path = require("path")
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')
require('dotenv').config()
const { hashSync, genSaltSync, compareSync } = require('bcrypt')
const { error } = require("console")
const authToken = require('./auth')
const cookieParser = require('cookie-parser')
const cors = require('cors')

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
server.use(cors({ origin: '*' }))
//server.use(logger('dev'))
//middleware
server.use(cookieParser())
server.use('/profile', authToken)
// server.use('*', (req, res, next) => {
//     console.log('middle')
//     next()
// })
//databas
db.connect().then(() => console.log("connected")).catch(err => console.log(err))
//login route
server.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})
//register route
server.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html')
})

//profile
server.get('/profile', (req, res) => {
    //res.sendFile(__dirname + '/public/login.html')
    console.log(req.currentUser)
    res.send(`profile: hi ${req.currentUser.user}`)
})

server.post('/register', async (req, res) => {
    // installera och importera bcrypt

    const salt = genSaltSync(10)
    const hashedpassword = hashSync(req.body.password, salt)
    const user = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email])
    if (user.rows.length !== 0) {
        res.status(400).json({ error: 'user exists' })
    } else {
        try {
            await db.query('INSERT INTO users (name, email, password) VALUES ($1,$2,$3)', [req.body.name, req.body.email, hashedpassword])
            res.redirect('/login')
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'server error' })
        }
    }
    //spara hashedpassword i databas
    //skicka tillbacka token
})


server.post('/login', async (req, res) => {
    console.log(req.body)
    //ta kontakt med db
    //kolla om användaren finns
    const user = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email])
    console.log(user.rows)
    if (user.rows.length !== 0) {
        //kolla on lösenordet stämmer
        const match = compareSync(req.body.password, user.rows[0].password)

        if (match) {
            const token = jwt.sign({ user: user.rows[0].email }, process.env.SECRET, { expiresIn: '2h' })
            res.cookie('auth', token, { httpOnly: true })
            //res.status(200).json({ token: token })
            res.redirect('/profile')
        } else {
            res.status(401).json({ error: 'WRONG' })
        }
    } else {
        res.status(400).json({ error: 'User not found' })
    }

    //skicka tillbacka token
})

//products
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
})

//5.7 uppg
//update
server.post('/update', async (req, res) => {
    try {
        await db.query('UPDATE products SET name = $1 WHERE id = $2', [req.body.newName, req.body.id])
        res.json({ message: 'Product updated' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: 'Something went wrong' })
    }
})


//5.8 uppg
//delete
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
//cd server -- node app.js/npm run dev to open da server
// CTRL + C to close da server
//localhost:3000
