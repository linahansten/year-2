import { useState, useEffect } from 'react';
import GetPokemon from '../components/GetPokemon.tsx';
import type { Pokemon } from '../components/GetPokemon.tsx';

const totalPokemons = 1017;

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [catchStatus, setCatchStatus] = useState("")

  function ifCatched(exp: number){
    const catchChance = Math.random()
    const pokeCaught = -0.00109 * exp + 0.54909

    if (catchChance <= pokeCaught) {
      setCatchStatus("caught")
      console.log("caught")
      saveCaughtPokemon(pokemon)
      renderPokemon()
      setCatchStatus("")

    } else {
      setCatchStatus("escaped")
      console.log("escaped")
    }
  }

  const saveCaughtPokemon = async (pokemon: Pokemon) => {
    console.log(pokemon)
    try {
      const response = await fetch('http://localhost:3000/api/pokemon', {
        method: 'POST',
        headers:{'Content-type': 'application/json'},
        body: JSON.stringify({
          name: pokemon.name,
          base_experience: pokemon.base_experience,
        }),
      });
  
      if (response.ok) {
        console.log('Pokemon saved successfully.');
      } else {
        console.error('Failed to save Pokemon. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error while saving Pokemon:', error);
    }
  };

  useEffect(() => {
    renderPokemon();
  }, [console.log("render")]);

  const renderPokemon = async() => {
    const data = await fetchData(getRandom(1, totalPokemons));
    setPokemon(data);
};

const fetchData = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};

  return (
    <div className='w-screen h-screen flex justify-center '>
      <img src="bow.png" className='w-full h-screen absolute z-0' alt="" />
      <div className='e w-96 flex items-center flex-col rounded py-10 px-14 z-20'>
        <h2 className='font-bold text-center text-white'>A Pokemon appeared. Quick shoot it!!</h2>
        {pokemon && <GetPokemon data={pokemon} />}
        <img onClick={() => console.log(ifCatched(parseFloat(pokemon.base_experience)))} className='w-32 h-28 cursor-pointer' src="arrow.png" alt="" />
        <p className='text-white'>{catchStatus}</p>
      </div>
    </div>
  );
  
}

export default App;
