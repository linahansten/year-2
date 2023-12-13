import { useState } from 'react'

export default function Dice() {
    const [num, setNum] = useState(0); 
    const randomNumberInRange = (min:number, max:number) => { 
        return Math.floor(Math.random()  * (max - min + 1)) + min; 
    }; 
  
    const handleDiceX4 = () => { 
        setNum(randomNumberInRange(1, 4)); 
    }; 
    const handleDiceX6 = () => { 
        setNum(randomNumberInRange(1, 6)); 
    }; 
    const handleDiceX20 = () => { 
        setNum(randomNumberInRange(1, 20)); 
    }; 

    return (
    <div>
    <button id='diceX4' onClick={handleDiceX4}>
        <p>d4</p>
    </button>

    <button id='diceX6' onClick={handleDiceX6}>
        <p>d6</p>
    </button>

    <button id='diceX20' onClick={handleDiceX20}>
        <p>d20</p>
    </button>

    <h2 id='diceNmr'>Dice Number is: {num} </h2>
    </div>
    )
}
