const jwt = require('jsonwebtoken')

const authToken = async (req, res, next) => {
    const token = req.cookies.auth
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        req['currentUser'] = decodedToken
        next()
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' })
    }
    next()
}

module.exports = authToken