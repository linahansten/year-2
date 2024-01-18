import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState();


  // Fetch Pokemon data from the PokeAPI
  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
     
      if (response.ok) {
        // Parse the response JSON and set the pokemon state
        const result = await response.json();
        setPokemon(result);
      } else {
        console.error('Error fetching data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  //button click
  const handleSearch = () => {
    fetchData();
  };

  return (
    <>
    <div className=" w-screen flex justify-center items-center p-4">
        {/* Input field */}
        <input
          className="border rounded px-2 py-1"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Button search */}
      <button className=" bg-slate-300 px-4 py-2 ml-2           rounded"onClick={handleSearch}>Search
      </button>
    </div>

      {/* Display Pokemon information if data is available */}
      {pokemon && (
        <div className="bg-slate-200 w-screen flex justify-center items-center flex-col p-4">

          {/* Pokemon name */}
          <h2 className="text-2xl font-bold mb-2">
          {pokemon.name}</h2>
          <img
            className="mb-4"
            width="150px"
            style={{ display: 'block', maxWidth: '200px', maxHeight: '200px' }}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          {/* Base Experience, Height, and Weight */}
          <p>Base xp: {pokemon.base_experience}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>

          {/* Abilities */}
          <p>
            Abilities:{' '}
            {pokemon.abilities
              ? pokemon.abilities.map((ability) => ability.ability.name).join(', ')
              : ''}
          </p>

          {/* Moves */}
          <div className=' w-52 md:w-2/3 '>
          <p className="mt-4 ">
            Moves:{' '}
            {pokemon.moves
              ? pokemon.moves.map((move) => move.move.name).join(', ')
              : ''}
          </p>
          </div>

          {/* Stats */}
          {pokemon.stats && pokemon.stats.length > 0 ? (
            <p className="mt-4">
              Stats:
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </p>
          ) : ''}

          {/* Types */}
          <p className="mt-4">
            Types:{' '}
            {pokemon.types
              ? pokemon.types.map((type) => type.type.name).join(', ')
              : ''}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
