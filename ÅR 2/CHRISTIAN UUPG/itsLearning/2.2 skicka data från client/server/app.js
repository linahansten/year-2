const express = require("express")
const path = require("path")
const server = express()
server.use(express.static(path.resolve("../client")))

server.use(express.json())
server.use(express.urlencoded())

server.post("/formData", (req, res) => {
    console.log(req.body)
    res.send(`Hi, your username is: ${req.body.user}`)
})
server.listen(3000, () => {
    console.log("Server is running")
})
//cd server -- node app.js to open da server
// CTRL + C to close da server