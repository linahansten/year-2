import db from "../../utils/db"

export default eventHandler(async(e) => {
const {data} = await readBody(e)

db.run(`
INSERT TO users (name, username, password) VALUE (?, ?, ?)
`,
[data.name, data.username, data.password],
    (error)=>{
        console.log(error)
    }
)

    return { data: 'done 🤷‍♀️' }
  })
  