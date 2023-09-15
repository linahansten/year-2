const express = require('express')
const cookieParser = require("cookie-parser")

const path = require('path')
const server = express()

server.use(cookieParser())
server.use(express.static(path.resolve('../client')))

server.use(express.urlencoded())
server.use(express.static('client'))


server.post('/cookies', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.send(`<h1>cookie: ${req.body.key}, ${req.body.value}</h1>`)
    console.log(req.body)
})

server.listen(3000, () => {
    console.log("Server is running")
})