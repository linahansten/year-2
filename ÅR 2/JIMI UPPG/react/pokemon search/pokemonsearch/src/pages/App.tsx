import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State to store Pokemon data
  const [data, setData] = useState();

  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch Pokemon data from the PokeAPI
  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      
      if (response.ok) {
        // Parse the response JSON and set the data state
        const result = await response.json();
        setData(result);
      } else {
        console.error('Error fetching data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [searchTerm]); // Fetch data whenever the search term changes

  // Function to handle the search button click
  const handleSearch = () => {
    fetchData();
  };

  return (
    <>
    <div className="m-4">
        {/* Input field for the user to enter the Pokemon name */}
        <input
          className="border rounded px-2 py-1"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Button to trigger the search */}
      <button className=" bg-slate-200 px-4 py-2 ml-2           rounded"onClick={handleSearch}>Search
      </button>
    </div>

      {/* Display Pokemon information if data is available */}
      {data && (
        <div className="bg-slate-200 w-screen flex justify-center items-center flex-col p-4">
          {/* Pokemon name */}
          <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
          <img
            className="mb-4"
            width="150px"
            height="150px"
            src={
              data && data.sprites ? data.sprites.front_default : ''
            }
          />

          {/* Base Experience, Height, and Weight */}
          <p>Base Experience: {data.base_experience}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>

          {/* Abilities */}
          <p>
            Abilities:{' '}
            {data.abilities
              ? data.abilities.map((ability) => ability.ability.name).join(', ')
              : 'N/A'}
          </p>

          {/* Moves */}
          <p className="mt-4">
            Moves:{' '}
            {data.moves
              ? data.moves.map((move) => move.move.name).join(', ')
              : 'N/A'}
          </p>

          {/* Stats */}
          {data.stats && data.stats.length > 0 ? (
            <p className="mt-4">
              Stats:
              <ul>
                {data.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </p>
          ) : (
            <p>No stats available</p>
          )}

          {/* Types */}
          <p className="mt-4">
            Types:{' '}
            {data.types
              ? data.types.map((type) => type.type.name).join(', ')
              : 'N/A'}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
