import React, { useState } from 'react'
import "./Lina.css"

export default function Lina() {
    const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={()=>setCount(count + 1)}className="button">hello</button>
    </div>
  )
}