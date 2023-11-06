import { useState } from "react"

export default function CounterPage(){

   //let count = 10
   const [count, setCount] = useState(0)

   const add = () => {
    //count = count + 1
    setCount(count+1)
   }
   const minus = () => {
    //count = count + 1
    setCount(count-1)
   }
    return(
    <div  className="h-screen flex justify-center items-center">
        <button onClick={minus} className="px-4 py-2 border rounded hover:bg-cyan-100">-</button>
        <span className="mx-4 text-4xl font-medium">{count}</span>
        <button onClick={add} className="px-4 py-2 border rounded hover:bg-cyan-100">+</button>
    </div>
    )
}