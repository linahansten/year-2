import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database.db", (error) => {
    if (error) {
        console.log(error)
    }
    console.log("connected to db💀")
})
export default db