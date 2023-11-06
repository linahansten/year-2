import React, { useState } from 'react'
import "./Lina.css"

export default function Lina() {
    const [text, setText] = useState("")
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={()=>setText("hello")} className="button">click me</button>
    </div>
  )

}

