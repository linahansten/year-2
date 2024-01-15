import React from 'react'

export type Pokemon = {
    id: string,
    name: string,
    base_experience: string,
    sprites: {
        front_default: string
    }
}

export default function GetPokemon({data}:{data: Pokemon}) {
    if(!data.name){
        return(
            <div>loading...</div>
        )
    } 
    return (
    <div>
        <div className='text-center'>
            {/* <h2>Id: {data.id}</h2> */}
            <h2 className='text-white'>Name: {data.name}</h2>
            <h2 className='text-white'>Base Exp: {data.base_experience}</h2>
            <img className='h-52 w-40 py-10' src={data.sprites.front_default}/>
            {/* <img className='h-60 w-60 p-5' src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}/> */}
        </div>
    </div>
  )
}
