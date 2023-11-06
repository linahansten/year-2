
import "./Product.css"
import { cart } from '../lib/store'
import { useAtom } from 'jotai'


export default function Product() {
    const [count, setCount] = useAtom(cart)
  return (
    <div>
      <img src="skin.jpg"alt="item" className='item'/>
      <button onClick={()=>setCount(count + 1)}className="add">Add</button>
    </div>
  )
}