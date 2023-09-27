const express = require("express")
const path = require("path")
const server = express()
const cookieParser = require("cookie-parser")
server.use(cookieParser())

server.use(express.static(path.resolve("../client")))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.get("/", (req, res) => {
    res.sendFile(path.resolve("../client/index.html"))
})

server.post("/set-role", (req, res) => {
    const { role } = req.body

    if (role === "admin") {
        res.cookie("role", "admin")
        res.redirect("/admin")
    } else if (role === "user") {
        res.cookie("role", "user")
        res.redirect("/user")
    } else {
        res.send("Invalid role selection")
    }
})

server.get("/admin", (req, res) => {
    const userRole = req.cookies.role

    if (userRole === "admin") {
        res.sendFile(path.resolve("../client/admin.html"))
    } else {
        res.send("Access denied. You are not an admin.")
    }
})

server.post("/admin/search", (req, res) => {
    const userRole = req.cookies.role

    if (userRole === "admin") {
        const { searchQuery } = req.body
        const searches = req.cookies.searches || []

        searches.push(searchQuery)
        res.cookie("searches", searches)

        res.redirect("/search")
    } else {
        res.send("Access denied. You are not an admin.")
    }
})
server.get("/search", (req, res) => {
    const searches = req.cookies.searches || []
    res.send("Search saved! Searches: " + JSON.stringify(searches))
})


server.listen(4000, () => {
    console.log("Server is running")
})

//npm init -y
//npm install express
//npm install cookie-parser
//cd server -- node app.js to open da server
// CTRL + C to close da server
//localhost:3000
