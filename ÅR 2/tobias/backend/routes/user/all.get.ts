import db from "../../utils/db"

export default eventHandler(async() => {
    const result= await new Promise((resolve, reject)=>{
        db.all(`SELECT * FROM users`,(error,rows)=>{
            if(error){
                reject(error)
            }else{
                resolve(rows)
            }
        })
    })
    console.log(result)
    return result 
})