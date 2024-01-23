import db from "./db.js"

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)
`), (error) => {
        if (error) {
            console.log(error.message)
        }
        console.log("created users table💀")
    }