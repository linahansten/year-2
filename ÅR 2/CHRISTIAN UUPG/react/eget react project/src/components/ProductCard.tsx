import React from 'react'
import "./Product.css"
type Products = {
    data: {
        id: number,
        name: string,
        stock: number,
        price: number,
        imgurl: string 
    }
}

export default function ProductCard({data}:Products) {
  return (
    <div key = {data.id} className='item'>
        <h2>{data.name}</h2>
        <p>stonks: {data.stock}</p>
        <img src={data.imgurl} alt=""/>
        <p>€{data.price}</p>
        <button className='add'>Add</button>
    </div>
  )
}