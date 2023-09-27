const path = require("path");
const cookieParser = require('cookie-parser');
const express = require('express');
const sessions = require('express-session');

const server = express();
server.use(cookieParser());
//server.use(express.static(path.resolve("../client")))

server.use(sessions({
    secret: 'nnJjfd09934*¤r3fdERfds*#¤',
    resave: false,
    cookie: { httpOnly: true, maxAge: 60 * 1000, sameSite: true }
}));

server.get('/', (req, res) => {
    console.log(req.session)
    if (req.session) {
        res.cookie("sessionId", req.session.id, { httpOnly: true, maxAge: 60 * 1000, sameSite: true })
        res.sendFile(path.resolve('../client/index.html'))
    } else {
        res.cookie("sessionId", "")
    }
    console.log(req.session.id)
});

server.listen(3000)