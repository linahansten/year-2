const express = require("express")
const path = require("path")
const server = express()
const fs = require("fs")

server.use(express.static(path.resolve("../client")))

server.use(express.json())
server.use(express.urlencoded())

server.post("/formData", (req, res) => {
    console.log(req.body)
    fs.writeFileSync("readMe.txt", `${req.body.user}`)
    res.send(`Hi, your username is: ${req.body.user}`)

})

server.get("/getFileData", (req, res) => {
    fs.readFile("readME.txt", "utf8", function (err, data) {
        console.log(data)
        res.send(`File content: ${data}`)
        //Använd fs för att läsa av filen och skicka vidare till client
    })
})

server.listen(4000, () => {
    console.log("Server is running")
})
//npm init -y
//cd server -- node app.js to open da server
// CTRL + C to close da server
//localhost:3000
