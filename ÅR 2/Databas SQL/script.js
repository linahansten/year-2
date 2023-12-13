const { Pool } = require('pg')
const db = new Pool({
    host: "cornelius.db.elephantsql.com",
    user: "zbkcqgao",
    database: "zbkcqgao",
    port: 5432,
    password: "e-nU-_oP0WWB2RVSXISqSbvn5pq4q3W9"
})

async function conn() {
    try {
        await db.connect()
        console.log("connected")
        const sql = await db.query("SELECT * FROM users")
        console.log(sql.rows)
    } catch (error) {
        console.log(error)
    }
}
conn()
// console.log(db.query("SELECT * FROM users"))