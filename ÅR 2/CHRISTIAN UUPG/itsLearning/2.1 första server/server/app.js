const express = require("express")
const server = express()

server.get("/", (req, res) => {
    res.send("Hello form backend")
})
server.listen(3000, () => {
    console.log("Server is running")
})
//cd server -- node app.js to open da server
// CTRL + C to close da server