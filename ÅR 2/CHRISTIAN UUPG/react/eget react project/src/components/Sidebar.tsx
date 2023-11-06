//import React, { createElement } from 'react'
import "../index.css"
import { cart } from '../lib/store'
import { useAtom } from 'jotai'
//import { FiMenu } from "react-icons/fi";

export default function Sidebar() {
    const [count] = useAtom(cart)
    //const item = <img src="skin.jpg"alt="item" className='item sidebaritem'/>

  return (
    <div className='sidebar'>Cart:({count}) 
    <span>&#127828;</span>
    <img src="skin.jpg"alt="item" className='item sidebaritem'/>
    </div>
  )
}
