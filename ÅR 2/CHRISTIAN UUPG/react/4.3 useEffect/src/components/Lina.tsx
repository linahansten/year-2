
import { useState, useEffect } from 'react'
import './Lina.css'

export default function Lina() {
  const [randomNumber, setRandomNumber] = useState(null)

  useEffect(() => {
    const random = Math.floor(Math.random() * 100)
    setRandomNumber(random)
  }, [])

  return (
    <div>
      <p>Number: {randomNumber}</p>
    </div>
  )
}
